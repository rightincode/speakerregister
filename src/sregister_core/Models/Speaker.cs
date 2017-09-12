using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace sregister_core.Models
{
    public class Speaker : IValidatableObject
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        public string EmailAddress { get; set; }

        [Required]
        public string PhoneNumber { get; set; }

        [Required]
        public string Address1 { get; set; }

        public string Address2 { get; set; }

        [Required]
        public string City { get; set; }

        [Required]
        public string State { get; set; }

        [Required]
        public string Zipcode { get; set; }

        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            var results = new List<ValidationResult>();
            results.AddRange(ValidateRequiredFields());

            return results;
        }

        private IEnumerable<ValidationResult> ValidateRequiredFields()
        {
            var memberNameList = new List<string>();

            //no need to validate Id, int32 will be initialized

            if (string.IsNullOrEmpty(this.FirstName) || string.IsNullOrWhiteSpace(this.FirstName))
            {
                memberNameList.Add("FirstName");
            }

            if (string.IsNullOrEmpty(this.LastName) || string.IsNullOrWhiteSpace(this.LastName))
            {
                memberNameList.Add("LastName");
            }

            if (string.IsNullOrEmpty(this.EmailAddress) || string.IsNullOrWhiteSpace(this.EmailAddress))
            {
                memberNameList.Add("EmailAddress");
            }

            if (string.IsNullOrEmpty(this.PhoneNumber) || string.IsNullOrWhiteSpace(this.PhoneNumber))
            {
                memberNameList.Add("PhoneNumber");
            }

            if (string.IsNullOrEmpty(this.Address1) || string.IsNullOrWhiteSpace(this.Address1))
            {
                memberNameList.Add("Address1");
            }

            if (string.IsNullOrEmpty(this.City) || string.IsNullOrWhiteSpace(this.City))
            {
                memberNameList.Add("City");
            }

            if (string.IsNullOrEmpty(this.State) || string.IsNullOrWhiteSpace(this.State))
            {
                memberNameList.Add("State");
            }

            if (string.IsNullOrEmpty(this.Zipcode) || string.IsNullOrWhiteSpace(this.Zipcode))
            {
                memberNameList.Add("Zipcode");
            }

            yield return new ValidationResult("Required Field Missing", memberNameList);
        }
    }
}
