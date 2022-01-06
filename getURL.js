function getUrl(){
    const URLprotocol = window.location.protocol;
    const URLhost = window.location.host;

    const URL = `${URLprotocol}//${URLhost}`;
    console.log(URL);
}
getUrl()