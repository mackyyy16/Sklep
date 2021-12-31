using Microsoft.AspNetCore.Mvc;
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
