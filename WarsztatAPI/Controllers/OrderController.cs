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

            var userInfo = context.user.Where(q => q.id_user == order.id_client).FirstOrDefault();

            var message = new MimeMessage();
            message.From.Add(new MailboxAddress($"Auto Parts", "autoparts24ns@gmail.com"));
            message.To.Add(new MailboxAddress("Maciej Poreba", "porbamaciek@gmail.com"));
            message.Subject = "[AutoParts] Potwierdzenie zamówienia";
            message.Body = new TextPart("plain")
            {
                Text = $"Witaj {userInfo.name}. Dziękujemy za zakupy na stronie AutoParts.pl Numer twojego zamówienia: {order.id_order}",
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
            if (order.status == "W trakcie realizacji")
            {
                var userInfo = context.user.Where(q => q.id_user == order.id_client).FirstOrDefault();

                var message = new MimeMessage();
                message.From.Add(new MailboxAddress($"Auto Parts", "autoparts24ns@gmail.com"));
                message.To.Add(new MailboxAddress("Maciej Poreba", "porbamaciek@gmail.com"));
                message.Subject = "[AutoParts] Twoja paczka została przekazana na magazyn";
                message.Body = new TextPart("plain")
                {
                    Text = $"Witaj {userInfo.name}. Twoje zamówienie o numerze {order.id_order} zostało przekazane do spakowania. Dziękujemy za zakupy na stronie AutoParts.pl!",
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
                var userInfo = context.user.Where(q => q.id_user == order.id_client).FirstOrDefault();

                order.end_date = DateTime.Now.ToString("dd-MM-yyyy");
                var message = new MimeMessage();
                message.From.Add(new MailboxAddress($"Auto Parts", "autoparts24ns@gmail.com"));
                message.To.Add(new MailboxAddress("Maciej Poreba", "porbamaciek@gmail.com"));
                message.Subject = "[AutoParts] Twoja paczka jest już w drodze";
                message.Body = new TextPart("plain")
                {
                    Text = $"Witaj {userInfo.name}. Twoje zamówienie o numerze {order.id_order} zostało spakowane i wysłane. Dziękujemy za zakupy na stronie AutoParts.pl!",
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
