function isLeap(yyyy){
    const Leap = new Date(`February 29 ${yyyy}`);
    return Leap.getDate() == 1 ? "It is Leap Year" : "It is Not Leap";
}
