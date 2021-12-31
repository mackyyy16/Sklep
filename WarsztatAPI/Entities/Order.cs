using System.ComponentModel.DataAnnotations;

namespace WarsztatAPI.Entities
{
    public class Order
    {
        [Key]
        public int id_order { get; set; }
        public string part_info { get; set; }//(part_id,amount,price)[]
        public int id_client { get; set; }
        public string start_date { get; set; }
        public string end_date { get; set; }
        public string status { get; set; }
        public double order_price { get; set; }
        public double parts_price { get; set; }
        public string transport { get; set; }
    }
}
