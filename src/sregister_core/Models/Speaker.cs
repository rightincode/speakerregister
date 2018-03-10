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

        public List<ValidationResult> ValidationResults { get; set; }

        public Speaker()
        {
            this.ValidationResults = new List<ValidationResult>();
        }

        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            //added in case we add additional attributes beyond required
            Validator.TryValidateProperty(this.Id,
                new ValidationContext(this, null, null) { MemberName = "Id" },
                this.ValidationResults);

            //added in case we add additional attributes beyond required
            Validator.TryValidateProperty(this.FirstName,
                new ValidationContext(this, null, null) { MemberName = "FirstName" },
                this.ValidationResults);

            //added in case we add additional attributes beyond required
            Validator.TryValidateProperty(this.LastName,
                new ValidationContext(this, null, null) { MemberName = "LastName" },
                this.ValidationResults);

            //added in case we add additional attributes beyond required
            Validator.TryValidateProperty(this.EmailAddress,
                new ValidationContext(this, null, null) { MemberName = "EmailAddress" },
                this.ValidationResults);

            //added in case we add additional attributes beyond required
            Validator.TryValidateProperty(this.PhoneNumber,
                new ValidationContext(this, null, null) { MemberName = "PhoneNumber" },
                this.ValidationResults);

            //added in case we add additional attributes beyond required
            Validator.TryValidateProperty(this.Address1,
                new ValidationContext(this, null, null) { MemberName = "Address1" },
                this.ValidationResults);

            //added in case we add additional attributes beyond required
            Validator.TryValidateProperty(this.Address2,
                new ValidationContext(this, null, null) { MemberName = "Address2" },
                this.ValidationResults);

            //added in case we add additional attributes beyond required
            Validator.TryValidateProperty(this.City,
                new ValidationContext(this, null, null) { MemberName = "City" },
                this.ValidationResults);

            //added in case we add additional attributes beyond required
            Validator.TryValidateProperty(this.State,
                new ValidationContext(this, null, null) { MemberName = "State" },
                this.ValidationResults);

            //added in case we add additional attributes beyond required
            Validator.TryValidateProperty(this.Zipcode,
                new ValidationContext(this, null, null) { MemberName = "Zipcode" },
                this.ValidationResults);

            return this.ValidationResults;
        }
        
    }
}
