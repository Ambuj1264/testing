var xml2js = require("xml2js");

class ObjectId {
  constructor(id) {
    this.id = id;
  }
}
let obj = {
  "soap:Envelope": {
    $: {
      "xmlns:soap": "http://www.w3.org/2003/05/soap-envelope",
      "xmlns:tem":
        "https://smex-ctp.trendmicro.com:443/wis/clicktime/v1/query?url=http%3a%2f%2ftempuri.org&umid=0163b770-0001-4195-8fd1-2f68b8b0675c&auth=20f5a02caaffed6250f0d55de82b5a5f90d92376-a6b278cc51f21fdfeb00050076a9d4dc8fd1ee0d",
      "xmlns:sapi":
        "http://schemas.datacontract.org/2004/07/SAPI.Entities.WayBillGeneration",
      "xmlns:sapi1":
        "http://schemas.datacontract.org/2004/07/SAPI.Entities.Admin",
    },
    "soap:Header":{
      $:{}
    },
    "sapi:Consignee": {
      "sapi:ConsigneeAddress1": "spaze itech park",
      "sapi:ConsigneeAddress2": "sohan road",
      "sapi:ConsigneeAddress3": "gurgaon",
      "sapi:ConsigneeAttention": "Subhah yadav",
      "sapi:ConsigneeCountryCode": "IN",
      "sapi:ConsigneeEmailID": "xysa@gmail.com",
      "sapi:ConsigneeMobile": 1234567890,
      "sapi:ConsigneeName": "bluedart",
      "sapi:ConsigneePincode": 122001,
      "sapi:ConsigneeStateCode": "",
      "sapi:ConsigneeTelephone": 12345678890
    },
      "sapi:Returnadds": {
        "sapi:ManifestNumber": "",
        "sapi:ReturnAddress1": "",
        "sapi:ReturnAddress2": "",
        "sapi:ReturnAddress3": "",
        "sapi:ReturnAddressinfo": "",
        "sapi:ReturnContact": "",
        "sapi:ReturnEmailID": "",
        "sapi:ReturnMobile": "",
        "sapi:ReturnPincode": "",
        "sapi:ReturnTelephone": ""
      }
    ,
      "sapi:Commodity": {
        "sapi:CommodityDetail1": "tesing dummy clothes",
        "sapi:CommodityDetail2": "uppper top",
        "sapi:CommodityDetail3": "lower top"
      }
    ,
    
      "sapi:ItemDetails": {
        "sapi:CGSTAmount": 10,
        "sapi:HSCode": 123456,
        "sapi:IGSTAmount": 10,
        "sapi:Instruction": "nothing",
        "sapi:InvoiceDate": "2022-02-22T18:00:05+05:30",
        "sapi:InvoiceNumber": 50153,
        "sapi:ItemID": 105,
        "sapi:ItemName": "clothes mans wear",
        "sapi:ItemValue": 1000,
        "sapi:Itemquantity": 1,
        "sapi:PlaceofSupply": "",
        "sapi:ProductDesc1": "man clothes",
        "sapi:ProductDesc2": "garments for man",
        "sapi:ReturnReason": "",
        "sapi:SGSTAmount": 10,
        "sapi:SKUNumber": "HD1234",
        "sapi:SellerGSTNNumber": "27AAACBX446L1ZS",
        "sapi:SellerName": "ADTECG HUB",
        "sapi:SubProduct1": "",
        "sapi:TaxableAmount": 10,
        "sapi:TotalValue": 1000,
        "sapi:cessAmount": 10,
        "sapi:countryOfOrigin": "in",
        "sapi:docType": "niv",
        "sapi:eWaybillDate": "2022-02-22T18:00:05+05:30",
        "sapi:eWaybillNumber": 123456789012
      }
    ,
    'bar:Bar': {
      $: {
        'xmlns:bar': 'http://bar.com'
      }
    }
  }
}

var builder = new xml2js.Builder();
var xml = builder.buildObject(obj);

console.log(xml);
