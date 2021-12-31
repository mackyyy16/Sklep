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

        [HttpPost]
        public void AddOrderToDb(Order order)
        {
            order.start_date = DateTime.Now.ToString("dd-MM-yyyy");
            this.context.order.Add(order);
            this.context.SaveChanges();

            var message = new MimeMessage();
            message.From.Add(new MailboxAddress($"Auto Parts nr zamówienia: {order.id_order}", "autoparts24ns@gmail.com"));
            message.To.Add(new MailboxAddress("Maciej Poreba", "porbamaciek@gmail.com"));
            message.Subject = "Hi,this is demo email";
            message.Body = new TextPart("plain")
            {
                Text = "Hello,My First Demo Mail it is.Thanks",
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
            if(order.status == "Wysłano")
                order.end_date = DateTime.Now.ToString("dd-MM-yyyy");

            this.context.order.Update(order);
            this.context.SaveChanges();
        }
    }
}
