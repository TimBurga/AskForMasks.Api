namespace AskForMasksCoreVue.Models
{
    using System;
    using Microsoft.Azure.Cosmos.Spatial;

    public class MaskRequest
    {
        public string       Id             { get; set; }
        public Organization Organization   { get; set; }
        public Submitter    Submitter      { get; set; }
        public DateTime     RequestDate    { get; set; }
    }

    public class Organization
    {
        public string Name                { get; set; }
        public string AddressLine1        { get; set; }
        public string AddressLine2        { get; set; }
        public string City                { get; set; }
        public string State               { get; set; }
        public string ZipCode             { get; set; }
        public Point  Geolocation         { get; set; }
        public string Phone               { get; set; }
        public string Email               { get; set; }
        public string ContactName         { get; set; }
        public string Description         { get; set; }
        public string Needs               { get; set; }
        public string SpecialInstructions { get; set; }
    }

    public class Submitter
    {
        public string FirstName            { get; set; }
        public string LastName             { get; set; }
        public string Phone                { get; set; }
        public string Email                { get; set; }
        public bool   WorksForOrganization { get; set; }
    }
}
