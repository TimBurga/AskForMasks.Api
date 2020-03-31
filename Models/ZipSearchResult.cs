namespace AskForMasksCoreVue.Models
{
    public class ZipSearchResult
    {
        public string      OriginZip       { get; set; }
        public double      DistanceInMiles { get; set; }
        public MaskRequest Request         { get; set; }
    }
}
