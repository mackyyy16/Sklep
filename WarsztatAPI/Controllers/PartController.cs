using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WarsztatAPI.DBContexts;
using WarsztatAPI.Entities;

namespace WarsztatAPI.Controllers
{
    [ApiController]
    [Route("api/parts")]
    public class PartController : ControllerBase
    {
        private readonly ApplicationContext context;

        public PartController(ApplicationContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var part = context.part.ToList<Part>();
            return Ok(part);
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult GetPart(int id)
        {
            var part = context.part.Where(q => q.id_part == id).FirstOrDefault();
            return Ok(part);
        }

        [HttpPost]
        public void AddPart(Part part)
        {
            context.part.Add(part);
            context.SaveChanges();
        }

        [HttpPost]
        [Route("/updatePartAmount")]
        public void UpdatePart(Part[] partInfo)
        {
            foreach (var part in partInfo)
            {
                var partFromDb = context.part.Where(q => q.id_part == part.id_part).FirstOrDefault();
                var newAmount = partFromDb.amount - part.amount;

                part.id_part = partFromDb.id_part;
                part.name = partFromDb.name;
                part.price = partFromDb.price;
                part.category = partFromDb.category;
                part.subcategory = partFromDb.subcategory;
                part.producer = partFromDb.producer;
                part.path_to_image = partFromDb.path_to_image;
                part.amount = newAmount;

                context.part.Update(part);
            }            
            context.SaveChanges();
        }

        [HttpDelete]
        [Route("{id}")]
        public void RemovePart(int id)
        {
            var part = context.part.Where(q => q.id_part == id).FirstOrDefault();

            if(part != null)
            {
                context.part.Remove(part);
                context.SaveChanges();
            }
        }
    }
}
