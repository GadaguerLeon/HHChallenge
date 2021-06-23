using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace HHInterviewChallenge.Models
{
    public class Color
    {
        [Key]
        public int id { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(20)")]

        public string ColorName { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(8)")]

        public string ColorHexValue { get; set; }
    }
}
