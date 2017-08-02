$(".nav-toggle").click(function() {
  if($(".nav-menu").hasClass("is-active")){
    $(".nav-menu").removeClass("is-active");
    $(".nav-menu").children().removeClass("r");
  }else{
    $(".nav-menu").addClass("is-active");
    $(".nav-menu").children().addClass("r");
  }
});

$('#owl-demo2').owlCarousel({
  nav: false,
  items: 1,
  margin: 0,
  URLhashListener:true,
  startPosition: 'URLHash'
});

$(".next1").click(function(e){

  $(".owl-next").click();
})

$(".prev1").click(function(){
  $(".owl-prev").click()
})


/*var p = ["ATIS RE designs programs for treaties and facultative accounts, and additional coverages, that provide tailored solutions due to our standing reputation with underwriters around the world. We pride ourselves for our ability to innovate, and create alternatives in each challenging market place.","Advantages:"]
var li = ["Our clients’ risks are placed with leading underwriters.","More than 50 years of combine experience from our technical team.","We have the ability to perform a risk management work to minimize risks to the account, which includes, among others, a report of recommendations made by expert engineers and certified to ISO 9001.","We offer the possibility of assembling unified reinsurance programs from the territory of the insured to operations that involved other countries.","Workheavy industries and adjust to the size of your need."]
var property = {hash:"property",img:"img/banner4.jpg",title:"Property & Catatrope",p:p,li:li}

var p1 = ["ATIS RE is focus on providing solutions for the ever changing and demanding energy marketplace. We have access to senior underwriter’s leaders that have in-depth energy expertise, and proven record in this highly technical class of business."]
var li1 = ["Downstream (Onshore): Oil Companies Refineries Petrochemical and Chemical Plants, Gas works Terminals and Tank Farms, Underground Storage Chemical Fertilizer Plants Marketing and Distribution of Petroleum Products","Midstream: Transportation by Pipeline or Vessel Gathering Separation and Storage ","Upstream (Offshore): Explorations, offshore and onshore. Production Platforms, Mobile Offshore Drilling Units,Floating Production storage off Loading Units, Offshore Construction activities, lease operators and non-operators, contracting over the hole and contracting down the hole.","Mining: Underground Mining Open Pit Mining General Mining Coal and Hard Rock Mining","Other: Steel Manufacturing Electric Utilities and Alternative Energy Alternative Electric (wind and solar) Renewables, Nuclear Power Generation"]
var energy = {hash:"energy",img:"img/banner4.jpg",title:"Energy",p:p1,li:li1}

var p2 = ["Atis Re has access to market-leading specialist in the placement and servicing of reinsurance of Banks and other financial institutions, obtaining coverage to match an individual client’s needs.","Institutions covered include commercial, retail and investment banks, asset managers, stockbrokers."]
var li2 = ["Bankers’ Blanket Bond","Computer crime","Kidnap, Ransom & Extortion","Plastic card","Clearing and Depository coverage","Professional indemnity","Directors and Officers","Safe Deposit Boxes","Cash in Transit","Fine Art Coverage","DDD","Computer crime"]
var risk = {hash:"risk",img:"img/banner4.jpg",title:"Financial Risk",p:p2,li:li2}

var p3 = ["ATIS RE provide customized solutions for the complex risks on this demanding line of business inherent to the activity that is developed.There are numerous risks involved in the construction of works and the realization of assemblies, ATIS RE offers specialized reinsurance programs covering"]
var li3 = ["Machinery Breakdown","Boiler Explosion","Constructor All Risk","Erection All Risk","Data Processing Equipment","Contractors Equipment","Civil Work"]
var engineering = {hash:"engineering",img:"img/banner4.jpg",title:"Engineering",p:p3,li:li3}

var p4 = ["ATIS RE focus on cargo business and related coverage’s, We also have extensive experience in the design and placement of Stock Throughput coverage,","Our team also has experience in yacht reinsurance and yatch marines coverage for most types of yachts and pleasure craft including mega-yachts and their associated liabilities."]
var li4 = ["Hull & Machinery ","Marine Cargo ","Marine Liability","Stock Throughput","Protection & Indemnity","Ports & Terminals ","Marine Facilities ","Hull and Liability ","Hull War Risk ","Airport Owners and Operator Liability"]
var marine = {hash:"marine",img:"img/banner4.jpg",title:"Marine",p:p4,li:li4}

var p5 = ["Liability and Casualty is a core line of business for ATIS RE and our team has pride themselves on precise and diligent underwriting to clients. whatever their size"]
var li5 = ["Professional Liability","Legal Liability","Directors & Officials","Produc Liability Cover","Pollution Liability Cover","Enviromantal Liability Cover","Product Guarantee & Recall"]
var lability = {hash:"lability",img:"img/banner4.jpg",title:"Lability",p:p5,li:li5}

var p6 = [""]
var li6 = ["Hull and Liability - Rotor wing and fixed-wing hull and liability insurance","Rotor Wing - Covers commercially and privately operated helicopters, including specialist users","Hull & War Risk - Covers hull war and allied perils, including malicious damage but excluding hull all-risks","Aviation premises and product liability- Cover for those responsible for aviation premises and housing third-party aircraft, maintaining third-party aircraft or manufacturing aviation products."]
var aviation = {hash:"aviation",img:"img/banner4.jpg",title:"Aviation",p:p6,li:li6}

var json = [property,energy,risk,engineering,marine,lability,aviation]

function ps(x){
  var result = ""
  for (var i = 0; i < x.length; i++) {
    var val = x[i]
    result += '<p class="main-content-v3 mb-25">' + val + '</p>'
  }
  return result;
}

function lis(y){
  var result = "<ul></ul>"
    for (var i = 0; i < y.length; i++) {
      var val = y[i]
      result += '<li>' + val + '</li>'
    }
  return result;
}

function carousel(x){
  var result = ""
  for (var i = 0; i < x.length; i++) {
    var val = x[i]
    result += '<div class="item" data-hash="'+ val.hash+'">
      <img src="'+ val.img +'" alt="ATIS">
      <div class="title-banner center">'+val.title+'</div>
      <div class="columns">
        <div class="column">
          <h1>'+val.title+'</h1>
          'ps(val.p) + lis(val.li)'
        </div>
      </div>
    </div>'
  }
  return result;
}

$("#owl-demo2").html(carousel(json))
*/
