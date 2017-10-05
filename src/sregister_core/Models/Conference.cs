using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace sregister_core.Models
{
    public class Conference : IValidatableObject
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Location { get; set; }

        [Required]
        public DateTime? StartDate { get; set; }

        [Required]
        public DateTime? EndDate { get; set; }

        [Required]
        public string City { get; set; }

        [Required]
        public string State { get; set; }

        public List<ValidationResult> ValidationResults { get; set; }

        public Conference()
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
            Validator.TryValidateProperty(this.Name,
                new ValidationContext(this, null, null) { MemberName = "Name" },
                this.ValidationResults);

            //added in case we add additional attributes beyond required
            Validator.TryValidateProperty(this.Location,
                new ValidationContext(this, null, null) { MemberName = "Location" },
                this.ValidationResults);

            //added in case we add additional attributes beyond required
            Validator.TryValidateProperty(this.StartDate,
                new ValidationContext(this, null, null) { MemberName = "StartDate" },
                this.ValidationResults);

            //added in case we add additional attributes beyond required
            Validator.TryValidateProperty(this.EndDate,
                new ValidationContext(this, null, null) { MemberName = "EndDate" },
                this.ValidationResults);

            //added in case we add additional attributes beyond required
            Validator.TryValidateProperty(this.City,
                new ValidationContext(this, null, null) { MemberName = "City" },
                this.ValidationResults);

            //added in case we add additional attributes beyond required
            Validator.TryValidateProperty(this.State,
                new ValidationContext(this, null, null) { MemberName = "State" },
                this.ValidationResults);

            return this.ValidationResults;
        }
    }
}
