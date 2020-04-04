namespace AskForMasksCoreVue.Models
{
    using Microsoft.Azure.Cosmos.Spatial;

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
}
