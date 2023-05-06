using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required]//không được để trống
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
    }
}