using MailKit.Net.Smtp;
using Microsoft.AspNetCore.Mvc;
using MimeKit;
using System;
using System.Linq;
using WarsztatAPI.DBContexts;
using WarsztatAPI.Entities;

namespace WarsztatAPI.Controllers
{
    [ApiController]
    [Route("api/order")]
    public class OrderController : ControllerBase
    {
        private readonly ApplicationContext context;
        public OrderController(ApplicationContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var orders = this.context.order.ToList<Order>();
            return Ok(orders);
        }

        [HttpGet, Route("{clientId}")]
        public IActionResult GetClientOrders(int clientId)
        {
            var orders = this.context.order.Where(q => q.id_client == clientId).ToList<Order>();
            return Ok(orders);
        }

        [HttpPost]
        public void AddOrderToDb(Order order)
        {
            order.start_date = DateTime.Now.ToString("dd-MM-yyyy");
            this.context.order.Add(order);
            this.context.SaveChanges();

            var message = new MimeMessage();
            message.From.Add(new MailboxAddress($"Auto Parts", "autoparts24ns@gmail.com"));
            message.To.Add(new MailboxAddress("Maciej Poreba", "porbamaciek@gmail.com"));
            message.Subject = "[AutoParts] Twoja paczka została przekazana na magazyn";
            message.Body = new TextPart("plain")
            {
                Text = $"Twoje zamówienie o numerze {order.id_order} zostało przekazane do spakowania. <br>" +                
                "<b>UWAGA</b> - od tego momentu nie są możliwe żadne zmiany w zamówionych produktach czy sposobie dostawy." + 
                "Po realizacji zamówienia, paczka zostanie przekazana do wysłania i będzie oczekiwać na odbiór przez wybraną firme kurierską - oczym poinformujemy osobną wiadomością" +
                "Prosimy mieć na uwadze, że firmy kurierskie odbierają od nas przesyłki w dni robocze (od poniedziałku do piątku), zazwyczaj między 13:00 a 16:30."+
                "Dziękujemy za zakuby w stronie AutoParts!"

                
            };
            using (var client = new SmtpClient())
            {
                client.Connect("smtp.gmail.com", 587, false);
                client.Authenticate("autoparts24ns@gmail.com", "Autoparts24");

                client.Send(message);
                client.Disconnect(true);
            }
        }

        [HttpPost, Route("updateOrder")]
        public void UpdateOrder(Order order)
        {
            if(order.status == "W trakcie realizacji")
            {
                var message = new MimeMessage();
                message.From.Add(new MailboxAddress($"Auto Parts nr zamówienia: {order.id_order}", "autoparts24ns@gmail.com"));
                message.To.Add(new MailboxAddress("Maciej Poreba", "porbamaciek@gmail.com"));
                message.Subject = "Hi,this is demo email";
                message.Body = new TextPart("plain")
                {
                    Text = "Cześć, twoje zamówienie jest w trakcie realizacji.",
                };
                using (var client = new SmtpClient())
                {
                    client.Connect("smtp.gmail.com", 587, false);
                    client.Authenticate("autoparts24ns@gmail.com", "Autoparts24");

                    client.Send(message);
                    client.Disconnect(true);
                }
            }


            if (order.status == "Wysłano")
            {
                order.end_date = DateTime.Now.ToString("dd-MM-yyyy");
                var message = new MimeMessage();
                message.From.Add(new MailboxAddress($"Auto Parts nr zamówienia: {order.id_order}", "autoparts24ns@gmail.com"));
                message.To.Add(new MailboxAddress("Maciej Poreba", "porbamaciek@gmail.com"));
                message.Subject = "Hi,this is demo email";
                message.Body = new TextPart("plain")
                {
                    Text = "Cześć, twoje zamówienie zostało wysłane",
                };
                using (var client = new SmtpClient())
                {
                    client.Connect("smtp.gmail.com", 587, false);
                    client.Authenticate("autoparts24ns@gmail.com", "Autoparts24");

                    client.Send(message);
                    client.Disconnect(true);
                }
            }

            this.context.order.Update(order);
            this.context.SaveChanges();
        }
    }
}
