using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HHInterviewChallenge.Models
{
    public class ColorDbContext:DbContext
    {
        public ColorDbContext(DbContextOptions<ColorDbContext> options):base(options)
        {

        }
        public DbSet<Color> Colors { get; set; }
    }

}
