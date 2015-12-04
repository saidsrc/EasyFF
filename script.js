
var SiteName = String(document.getElementsByTagName("h3")[1].innerText);
var isN11 = SiteName.includes("n11-");
console.log("Is n11 =" + isN11);

var adres = window.location.href;
var siteID = adres.match('=.*.$');
siteID = String(siteID);
siteID = siteID.replace("=", "");
console.log(siteID);



var FFTable = document.getElementsByClassName("table-striped table-condensed table-hover")[0];
var FFTableRows = FFTable.getElementsByTagName("tr");
var MultipleFFTable = document.getElementsByClassName("table-striped table-condensed table-hover")[1];
var MultipleFFTableRows = MultipleFFTable.getElementsByTagName("tr");
var InitialPriceFFLinks = MultipleFFTableRows[1].getElementsByTagName("td")[0].getElementsByTagName("a");
var UpdateFFTable = document.getElementsByClassName("table-striped table-condensed table-hover")[2];
var UpdatePriceFFInput = UpdateFFTable.getElementsByTagName("td")[0].getElementsByTagName("input")[3];
var UpdatePriceFFButton = UpdateFFTable.getElementsByTagName("td")[0].getElementsByTagName("input")[4];
if (InitialPriceFFLinks.length > 1) {
	console.log('Multiple FF VAR');
};
if (typeof MultipleFFTableRows[3] != 'undefined') {
	var ThirdPriceFFTextInput = MultipleFFTableRows[3].getElementsByTagName('td')[0].getElementsByTagName('form')[0].getElementsByTagName('input')[4];
};
if (typeof MultipleFFTableRows[3] != 'undefined' && ThirdPriceFFTextInput.value === "") {
	console.log('Multiple FF yanlış girilmiş');
	var UpdatedPriceFFValue = "";
	for (var v = 0; v < InitialPriceFFLinks.length; v++) {
		UpdatedPriceFFValue += InitialPriceFFLinks[v].href.replace('http://prisync.com/admin/fetchField/update/id/', '') + ",";
	};
	UpdatedPriceFFValue = String(UpdatedPriceFFValue);
	UpdatedPriceFFValue = UpdatedPriceFFValue.slice(0, -1);
	UpdatePriceFFInput.value = UpdatedPriceFFValue;
	//UpdatePriceFFButton.click();
	setTimeout(function() {
		//location.reload();
	}, 1000);
} else {};
if (typeof MultipleFFTableRows[2] != 'undefined') {
	var SecondaryPriceFFLinks = MultipleFFTableRows[2].getElementsByTagName("td")[0].getElementsByTagName("a");
	console.log('Multiple FF VAR');
	if (InitialPriceFFLinks.length === SecondaryPriceFFLinks.length) {
		console.log('Multiple FF doğru girilmiş');
	} else {
		console.log('Multiple FF yanlış girilmiş');
		var UpdatedPriceFFValue = "";
		for (var v = 0; v < InitialPriceFFLinks.length; v++) {
			UpdatedPriceFFValue += InitialPriceFFLinks[v].href.replace('http://prisync.com/admin/fetchField/update/id/', '') + ",";
		}
		UpdatedPriceFFValue = String(UpdatedPriceFFValue);
		UpdatedPriceFFValue = UpdatedPriceFFValue.slice(0, -1);
		UpdatePriceFFInput.value = UpdatedPriceFFValue;
		//UpdatePriceFFButton.click();
		setTimeout(function() {
			//location.reload();
		}, 1000);
	};
} else {};
if (typeof FFTableRows[1] != 'undefined') {
	//console.log('VAR');
	var TableElement = document.getElementsByClassName("breadcrumbs")[0];

	CurrencyFrame = document.createElement("IFRAME");
	CurrencyFrame.setAttribute("src", "http://prisync.com/admin/currency/sitecurrency?site_id=" + siteID);
	CurrencyFrame.style.width = 300 + "px";
	CurrencyFrame.style.height = 260 + "px";
	CurrencyFrame.id = "CurrencyFrame";
	CurrencyFrame.style.overflow = "hidden";

	TableElement.parentNode.insertBefore(CurrencyFrame, TableElement);

	StatusFrame = document.createElement("IFRAME");
	StatusFrame.setAttribute("src", "http://prisync.com/admin/company/chart?site_id=" + siteID);
	StatusFrame.style.width = 300 + "px";
	StatusFrame.style.height = 260 + "px";
	StatusFrame.id = "StatusFrame";
	StatusFrame.style.overflow = "hidden";

	CurrencyFrame.parentNode.insertBefore(StatusFrame, CurrencyFrame);

	PhantomFrame = document.createElement("IFRAME");
	PhantomFrame.setAttribute("src", "http://prisync.com/admin/site/update/id/" + siteID);
	PhantomFrame.style.width = 300 + "px";
	PhantomFrame.style.height = 260 + "px";
	PhantomFrame.id = "PhantomFrame";
	PhantomFrame.style.overflow = "hidden";
	StatusFrame.parentNode.insertBefore(PhantomFrame, StatusFrame);
	for (var t = 1; FFTableRows.length > t; t++) {
		var ffID = FFTableRows[t].getElementsByTagName("td")[0].getElementsByTagName("a")[0].innerHTML;
		ffID = String(ffID);
		window['UpdateFrame' + ffID] = document.createElement("IFRAME");
		window['UpdateFrame' + ffID].setAttribute("src", "http://prisync.com/admin/fetchField/update/id/" + ffID);
		//console.log(ffID);
		window['UpdateFrame' + ffID].style.width = 300 + "px";
		window['UpdateFrame' + ffID].style.height = 660 + "px";
		window['UpdateFrame' + ffID].id = "UpdateFrame" + ffID;
		window['UpdateFrame' + ffID].style.overflow = "hidden";
		var FrameID = "UpdateFrame" + ffID;
		FrameID = String(FrameID);
		PhantomFrame.parentNode.insertBefore(window['UpdateFrame' + ffID], PhantomFrame);
	};
	setTimeout(function() {



		document.getElementById('CurrencyFrame')
			.contentWindow.document.getElementById("footer")
			.remove();
		document.getElementById('CurrencyFrame')
			.contentWindow.document.getElementById("header")
			.remove();
		document.getElementById('CurrencyFrame')
			.contentWindow.document.getElementById("mainmenu")
			.remove();
		document.getElementById('CurrencyFrame')
			.contentWindow.document.getElementsByClassName("breadcrumbs")[0].remove();
		document.getElementById('CurrencyFrame')
			.contentWindow.document.getElementsByClassName("span-5 last")[0].remove();
		document.getElementById('CurrencyFrame')
			.contentWindow.document.getElementsByTagName("h3")[0].innerHTML = 'CURRENCY';
		document.getElementById('PhantomFrame')
			.contentWindow.document.getElementById("footer")
			.remove();
		document.getElementById('PhantomFrame')
			.contentWindow.document.getElementById("header")
			.remove();
		document.getElementById('PhantomFrame')
			.contentWindow.document.getElementById("mainmenu")
			.remove();
		document.getElementById('PhantomFrame')
			.contentWindow.document.getElementsByClassName("breadcrumbs")[0].remove();
		document.getElementById('PhantomFrame')
			.contentWindow.document.getElementsByClassName("note")[0].remove();
		document.getElementById('PhantomFrame')
			.contentWindow.document.getElementsByClassName("span-5 last")[0].remove();
		document.getElementById('PhantomFrame')
			.contentWindow.document.getElementsByTagName("h1")[0].innerHTML = 'Content Type';
		document.getElementById('StatusFrame')
			.contentWindow.document.getElementById("footer")
			.remove();
		document.getElementById('StatusFrame')
			.contentWindow.document.getElementById("header")
			.remove();
		document.getElementById('StatusFrame')
			.contentWindow.document.getElementById("mainmenu")
			.remove();
		document.getElementById('StatusFrame')
			.contentWindow.document.getElementsByTagName("h3")[0].innerHTML = 'Status';
		$("#PhantomFrame")
			.contents()
			.find("#Site_url")
			.hide();
		$("#PhantomFrame")
			.contents()
			.find("#Site_name")
			.hide();
		$("#PhantomFrame")
			.contents()
			.find("#Site_frequency")
			.hide();
		$("#PhantomFrame")
			.contents()
			.find("[for=Site_url]")
			.hide();
		$("#PhantomFrame")
			.contents()
			.find("[for=Site_name]")
			.hide();
		$("#PhantomFrame")
			.contents()
			.find("[for=Site_frequency]")
			.hide();
		$("#PhantomFrame")
			.contents()
			.find("[for=Site_content_type]")
			.hide();
		$("#PhantomFrame")
			.contents()
			.find("input[type=submit]")
			.css('width', '215px');
		$("#PhantomFrame")
			.contents()
			.find("input[type=submit]")
			.css('height', '50px');
		$("#CurrencyFrame")
			.contents()
			.find("input[type=submit]")
			.css('width', '215px');
		$("#CurrencyFrame")
			.contents()
			.find("input[type=submit]")
			.css('height', '50px');



		for (var t = 1; FFTableRows.length > t; t++) {
			var ffID = FFTableRows[t].getElementsByTagName("td")[0].getElementsByTagName("a")[0].innerHTML;
			ffID = String(ffID);
			var FrameID = "UpdateFrame" + ffID;
			var FrameSelector = '#' + FrameID;
			FrameID = String(FrameID);
			//console.log(FrameID);

			document.getElementById(FrameID)
				.contentWindow.document.getElementById("FetchField_field_name")
				.setAttribute("type", "hidden");
			document.getElementById(FrameID)
				.contentWindow.document.getElementById("mainmenu")
				.remove();
			document.getElementById(FrameID)
				.contentWindow.document.getElementById("header")
				.remove();
			document.getElementById(FrameID)
				.contentWindow.document.getElementById("footer")
				.remove();
			document.getElementById(FrameID)
				.contentWindow.document.getElementById("FetchField_description")
				.setAttribute("type", "hidden");
			document.getElementById(FrameID)
				.contentWindow.document.getElementById("FetchField_dependent_to")
				.setAttribute("type", "hidden");
			document.getElementById(FrameID)
				.contentWindow.document.getElementById("FetchField_selector_order")
				.setAttribute("type", "hidden");
			document.getElementById(FrameID)
				.contentWindow.document.getElementById("FetchField_site_id")
				.setAttribute("type", "hidden");
			document.getElementById(FrameID)
				.contentWindow.document.getElementsByClassName("breadcrumbs")[0].remove();
			document.getElementById(FrameID)
				.contentWindow.document.getElementsByClassName("note")[0].remove();




			if (document.getElementById(FrameID)
				.contentWindow.document.getElementById("FetchField_field_name")
				.value.indexOf("Anchor") > -1) {
				document.getElementById(FrameID)
					.contentWindow.document.getElementsByTagName("h1")[0].innerHTML = 'FF #' + ffID + '<br/>(Anchor)';
				document.getElementById(FrameID)
					.contentWindow.document.getElementById("FetchField_price_delimiter")
					.setAttribute("type", "hidden");
				document.getElementById(FrameID)
					.contentWindow.document.getElementById("FetchField_price_index")
					.setAttribute("type", "hidden");
				document.getElementById(FrameID)
					.contentWindow.document.getElementById("FetchField_price_regex")
					.setAttribute("type", "hidden");
				$(FrameSelector)
					.contents()
					.find("[for=FetchField_price_delimiter]")
					.hide();
				$(FrameSelector)
					.contents()
					.find("[for=FetchField_price_index]")
					.hide();
				$(FrameSelector)
					.contents()
					.find("[for=FetchField_price_regex]")
					.hide();

			} else if (document.getElementById(FrameID)
				.contentWindow.document.getElementById("FetchField_field_name")
				.value.indexOf("Price") > -1) {
				document.getElementById(FrameID)
					.contentWindow.document.getElementsByTagName("h1")[0].innerHTML = 'FF #' + ffID + '<br/>(Price)';
			} else if (document.getElementById(FrameID)
				.contentWindow.document.getElementById("FetchField_field_name")
				.value.indexOf("Stock") > -1) {
				document.getElementById(FrameID)
					.contentWindow.document.getElementsByTagName("h1")[0].innerHTML = 'FF #' + ffID + '<br/>(Stock)';
				document.getElementById(FrameID)
					.contentWindow.document.getElementById("FetchField_price_delimiter")
					.setAttribute("type", "hidden");
				document.getElementById(FrameID)
					.contentWindow.document.getElementById("FetchField_price_index")
					.setAttribute("type", "hidden");
				document.getElementById(FrameID)
					.contentWindow.document.getElementById("FetchField_price_regex")
					.setAttribute("type", "hidden");
				$(FrameSelector)
					.contents()
					.find("[for=FetchField_price_delimiter]")
					.hide();
				$(FrameSelector)
					.contents()
					.find("[for=FetchField_price_index]")
					.hide();
				$(FrameSelector)
					.contents()
					.find("[for=FetchField_price_regex]")
					.hide();
			} else {
				document.getElementById(FrameID)
					.contentWindow.document.getElementsByTagName("h1")[0].innerHTML = 'FF #' + ffID;
			}


			$(FrameSelector)
				.contents()
				.find("[for=FetchField_field_name]")
				.hide();
			$(FrameSelector)
				.contents()
				.find("[for=FetchField_description]")
				.hide();
			$(FrameSelector)
				.contents()
				.find("[for=FetchField_dependent_to]")
				.hide();
			$(FrameSelector)
				.contents()
				.find("[for=FetchField_selector_order]")
				.hide();
			$(FrameSelector)
				.contents()
				.find("[for=FetchField_site_id]")
				.hide();
			$(FrameSelector)
				.contents()
				.find("input[type=submit]")
				.css('width', '215px');
			$(FrameSelector)
				.contents()
				.find("input[type=submit]")
				.css('height', '50px');

		};
	}, 4000);
};
if (typeof FFTableRows[1] === 'undefined') {
	$(document)
		.on('paste', function(event) {
			var oEvent = event.originalEvent;
			if (event.preventDefault())
				event.preventDefault();

			var clipText = '';
			if (window.clipboardData) {
				clipText = window.clipboardData.getData('Text');
			} else if (typeof oEvent == 'object' && oEvent.clipboardData) {
				clipText = oEvent.clipboardData.getData('text/plain');
			}

			// console.log('Pasted ' + clipText.length + ' characters.');
			if (clipText.indexOf("http") > -1) {
				document.getElementById('URLCheckFrame')
					.contentWindow.document.getElementById('url')
					.value = clipText;
				document.getElementById('URLCheckFrame')
					.contentWindow.document.getElementsByClassName('pure-button-primary')[2].click();
			} else {
				var PasteData = $.parseJSON(clipText);
				console.log(PasteData.selectors.Field1.css + " " + PasteData.selectors.Field2.css + " " + PasteData.selectors.Field3.css);
				document.getElementById('URLCheckFrame')
					.contentWindow.document.getElementById('anchorSelector')
					.value = PasteData.selectors.Field1.css;
				document.getElementById('URLCheckFrame')
					.contentWindow.document.getElementById('priceSelector')
					.value = PasteData.selectors.Field2.css;
				document.getElementById('URLCheckFrame')
					.contentWindow.document.getElementById('stockSelector')
					.value = PasteData.selectors.Field3.css;
			}
		});

	$('#pageDiv')
		.keydown(function(e) {
			if (!event.ctrlKey)
				return false;
		});
	var adres = window.location.href;
	var ffID = adres.match('=.*.$');
	ffID = String(ffID);
	ffID = ffID.replace("=", "");
	console.log(ffID);
	CurrencyFrame = document.createElement("IFRAME");
	CurrencyFrame.setAttribute("src", "http://prisync.com/admin/currency/sitecurrency?site_id=" + ffID);
	CurrencyFrame.style.width = 300 + "px";
	CurrencyFrame.style.height = 260 + "px";
	CurrencyFrame.id = "CurrencyFrame";
	CurrencyFrame.style.overflow = "hidden";
	var TableElement = document.getElementsByClassName("breadcrumbs")[0];
	TableElement.parentNode.insertBefore(CurrencyFrame, TableElement);
	StatusFrame = document.createElement("IFRAME");
	StatusFrame.setAttribute("src", "http://prisync.com/admin/company/chart?site_id=" + ffID);
	StatusFrame.style.width = 300 + "px";
	StatusFrame.style.height = 260 + "px";
	StatusFrame.id = "StatusFrame";
	StatusFrame.style.overflow = "hidden";
	CurrencyFrame.parentNode.insertBefore(StatusFrame, CurrencyFrame);
	PhantomFrame = document.createElement("IFRAME");
	PhantomFrame.setAttribute("src", "http://prisync.com/admin/site/update/id/" + ffID);
	PhantomFrame.style.width = 300 + "px";
	PhantomFrame.style.height = 260 + "px";
	PhantomFrame.id = "PhantomFrame";
	PhantomFrame.style.overflow = "hidden";
	StatusFrame.parentNode.insertBefore(PhantomFrame, StatusFrame);
	StockFrame = document.createElement("IFRAME");
	StockFrame.setAttribute("src", "http://prisync.com/admin/fetchField/create/site_id/" + ffID);
	StockFrame.style.width = 300 + "px";
	StockFrame.style.height = 1200 + "px";
	StockFrame.id = "StockFrame";
	StockFrame.style.overflow = "hidden";
	PhantomFrame.parentNode.insertBefore(StockFrame, PhantomFrame);
	PriceFrame = document.createElement("IFRAME");
	PriceFrame.setAttribute("src", "http://prisync.com/admin/fetchField/create/site_id/" + ffID);
	PriceFrame.style.width = 300 + "px";
	PriceFrame.style.height = 1200 + "px";
	PriceFrame.id = "PriceFrame";
	PriceFrame.style.overflow = "hidden";
	StockFrame.parentNode.insertBefore(PriceFrame, StockFrame);
	AnchorFrame = document.createElement("IFRAME");
	AnchorFrame.setAttribute("src", "http://prisync.com/admin/fetchField/create/site_id/" + ffID);
	AnchorFrame.style.width = 300 + "px";
	AnchorFrame.style.height = 1200 + "px";
	AnchorFrame.id = "AnchorFrame";
	AnchorFrame.style.overflow = "hidden";
	PriceFrame.parentNode.insertBefore(AnchorFrame, PriceFrame);
	URLCheckFrame = document.createElement("IFRAME");
	URLCheckFrame.setAttribute("src", "http://urlcheck.prisync.com/");
	URLCheckFrame.style.width = 300 + "px";
	URLCheckFrame.style.height = 1200 + "px";
	URLCheckFrame.id = "URLCheckFrame";
	URLCheckFrame.style.overflow = "hidden";
	AnchorFrame.parentNode.insertBefore(URLCheckFrame, AnchorFrame);

	setTimeout(function() {
		document.getElementById('page')
			.style.width = 1220 + "px";
		document.getElementById('AnchorFrame')
			.contentWindow.document.getElementById("FetchField_element_path")
			.setAttribute("value", localStorage.getItem("AncSel"));
		document.getElementById('PriceFrame')
			.contentWindow.document.getElementById("FetchField_element_path")
			.setAttribute("value", localStorage.getItem("PriSel"));
		document.getElementById('StockFrame')
			.contentWindow.document.getElementById("FetchField_element_path")
			.setAttribute("value", localStorage.getItem("StoSel"));

		document.getElementById('AnchorFrame')
			.contentWindow.document.getElementById("FetchField_element_index")
			.setAttribute("value", localStorage.getItem("AncSelInd"));
		document.getElementById('PriceFrame')
			.contentWindow.document.getElementById("FetchField_element_index")
			.setAttribute("value", localStorage.getItem("PriSelInd"));
		document.getElementById('StockFrame')
			.contentWindow.document.getElementById("FetchField_element_index")
			.setAttribute("value", localStorage.getItem("StoSelInd"));

		document.getElementById('PriceFrame')
			.contentWindow.document.getElementById("FetchField_price_regex")
			.setAttribute("value", localStorage.getItem("PriRgx"));
		document.getElementById('PriceFrame')
			.contentWindow.document.getElementById("FetchField_price_delimiter")
			.setAttribute("value", localStorage.getItem("PriDel"));
		document.getElementById('PriceFrame')
			.contentWindow.document.getElementById("FetchField_price_index")
			.setAttribute("value", localStorage.getItem("PriDelInd"));


		localStorage.setItem("AncSel", "");
		localStorage.setItem("PriSel", "");
		localStorage.setItem("StoSel", "");
		localStorage.setItem("PriRgx", "");

		if (isN11 === true) {
			document.getElementById('AnchorFrame')
				.contentWindow.document.getElementById("FetchField_element_path")
				.setAttribute("value", "h1.proName");
			document.getElementById('PriceFrame')
				.contentWindow.document.getElementById("FetchField_element_path")
				.setAttribute("value", "div.newPrice span");
			document.getElementById('StockFrame')
				.contentWindow.document.getElementById("FetchField_element_path")
				.setAttribute("value", "#instantPay");
		}

		document.getElementById('AnchorFrame')
			.contentWindow.document.getElementById("FetchField_description")
			.setAttribute("type", "hidden");
		document.getElementById('AnchorFrame')
			.contentWindow.document.getElementById("FetchField_field_name")
			.setAttribute("type", "hidden");
		document.getElementById('AnchorFrame')
			.contentWindow.document.getElementById("FetchField_field_name")
			.setAttribute("value", "Anchor");
		document.getElementById('AnchorFrame')
			.contentWindow.document.getElementById("FetchField_site_id")
			.setAttribute("type", "hidden");
		document.getElementById('AnchorFrame')
			.contentWindow.document.getElementById("footer")
			.remove();
		document.getElementById('AnchorFrame')
			.contentWindow.document.getElementById("header")
			.remove();
		document.getElementById('AnchorFrame')
			.contentWindow.document.getElementById("mainmenu")
			.remove();
		document.getElementById('AnchorFrame')
			.contentWindow.document.getElementsByClassName("breadcrumbs")[0].remove();
		document.getElementById('AnchorFrame')
			.contentWindow.document.getElementsByClassName("note")[0].remove();
		document.getElementById('AnchorFrame')
			.contentWindow.document.getElementsByClassName("span-5 last")[0].remove();
		document.getElementById('AnchorFrame')
			.contentWindow.document.getElementsByTagName("h1")[0].innerHTML = 'Anchor';
		document.getElementById('CurrencyFrame')
			.contentWindow.document.getElementById("footer")
			.remove();
		document.getElementById('CurrencyFrame')
			.contentWindow.document.getElementById("header")
			.remove();
		document.getElementById('CurrencyFrame')
			.contentWindow.document.getElementById("mainmenu")
			.remove();
		document.getElementById('CurrencyFrame')
			.contentWindow.document.getElementsByClassName("breadcrumbs")[0].remove();
		document.getElementById('CurrencyFrame')
			.contentWindow.document.getElementsByClassName("span-5 last")[0].remove();
		document.getElementById('CurrencyFrame')
			.contentWindow.document.getElementsByTagName("h3")[0].innerHTML = 'CURRENCY';
		document.getElementById('PhantomFrame')
			.contentWindow.document.getElementById("footer")
			.remove();
		document.getElementById('PhantomFrame')
			.contentWindow.document.getElementById("header")
			.remove();
		document.getElementById('PhantomFrame')
			.contentWindow.document.getElementById("mainmenu")
			.remove();
		document.getElementById('PhantomFrame')
			.contentWindow.document.getElementsByClassName("breadcrumbs")[0].remove();
		document.getElementById('PhantomFrame')
			.contentWindow.document.getElementsByClassName("note")[0].remove();
		document.getElementById('PhantomFrame')
			.contentWindow.document.getElementsByClassName("span-5 last")[0].remove();
		document.getElementById('PhantomFrame')
			.contentWindow.document.getElementsByTagName("h1")[0].innerHTML = 'Content Type';
		document.getElementById('PriceFrame')
			.contentWindow.document.getElementById("FetchField_description")
			.setAttribute("type", "hidden");
		document.getElementById('PriceFrame')
			.contentWindow.document.getElementById("FetchField_field_name")
			.setAttribute("type", "hidden");
		document.getElementById('PriceFrame')
			.contentWindow.document.getElementById("FetchField_field_name")
			.setAttribute("value", "Price");
		document.getElementById('PriceFrame')
			.contentWindow.document.getElementById("FetchField_site_id")
			.setAttribute("type", "hidden");
		document.getElementById('PriceFrame')
			.contentWindow.document.getElementById("footer")
			.remove();
		document.getElementById('PriceFrame')
			.contentWindow.document.getElementById("header")
			.remove();
		document.getElementById('PriceFrame')
			.contentWindow.document.getElementById("mainmenu")
			.remove();
		document.getElementById('PriceFrame')
			.contentWindow.document.getElementsByClassName("breadcrumbs")[0].remove();
		document.getElementById('PriceFrame')
			.contentWindow.document.getElementsByClassName("note")[0].remove();
		document.getElementById('PriceFrame')
			.contentWindow.document.getElementsByClassName("span-5 last")[0].remove();
		document.getElementById('PriceFrame')
			.contentWindow.document.getElementsByTagName("h1")[0].innerHTML = 'Price';
		document.getElementById('StockFrame')
			.contentWindow.document.getElementById("FetchField_description")
			.setAttribute("type", "hidden");
		document.getElementById('StockFrame')
			.contentWindow.document.getElementById("FetchField_does_exist")
			.setAttribute("value", "-1");
		document.getElementById('StockFrame')
			.contentWindow.document.getElementById("FetchField_field_name")
			.setAttribute("type", "hidden");
		document.getElementById('StockFrame')
			.contentWindow.document.getElementById("FetchField_field_name")
			.setAttribute("value", "Stock");
		document.getElementById('StockFrame')
			.contentWindow.document.getElementById("FetchField_site_id")
			.setAttribute("type", "hidden");
		document.getElementById('StockFrame')
			.contentWindow.document.getElementById("footer")
			.remove();
		document.getElementById('StockFrame')
			.contentWindow.document.getElementById("header")
			.remove();
		document.getElementById('StockFrame')
			.contentWindow.document.getElementById("mainmenu")
			.remove();
		document.getElementById('StockFrame')
			.contentWindow.document.getElementsByClassName("breadcrumbs")[0].remove();
		document.getElementById('StockFrame')
			.contentWindow.document.getElementsByClassName("note")[0].remove();
		document.getElementById('StockFrame')
			.contentWindow.document.getElementsByClassName("span-5 last")[0].remove();
		document.getElementById('StockFrame')
			.contentWindow.document.getElementsByTagName("h1")[0].innerHTML = 'Stock';
		document.getElementById('StatusFrame')
			.contentWindow.document.getElementById("footer")
			.remove();
		document.getElementById('StatusFrame')
			.contentWindow.document.getElementById("header")
			.remove();
		document.getElementById('StatusFrame')
			.contentWindow.document.getElementById("mainmenu")
			.remove();
		document.getElementById('StatusFrame')
			.contentWindow.document.getElementsByTagName("h3")[0].innerHTML = 'Status';



		//Gizlenen inputların labellarını siliyorum

		$("#PhantomFrame")
			.contents()
			.find("#Site_url")
			.hide();
		$("#PhantomFrame")
			.contents()
			.find("#Site_name")
			.hide();
		$("#PhantomFrame")
			.contents()
			.find("#Site_frequency")
			.hide();
		$("#PhantomFrame")
			.contents()
			.find("[for=Site_url]")
			.hide();
		$("#PhantomFrame")
			.contents()
			.find("[for=Site_name]")
			.hide();
		$("#PhantomFrame")
			.contents()
			.find("[for=Site_frequency]")
			.hide();
		$("#PhantomFrame")
			.contents()
			.find("[for=Site_content_type]")
			.hide();


		$("#PhantomFrame")
			.contents()
			.find("input[type=submit]")
			.css('width', '215px');
		$("#PhantomFrame")
			.contents()
			.find("input[type=submit]")
			.css('height', '50px');
		$("#CurrencyFrame")
			.contents()
			.find("input[type=submit]")
			.css('width', '215px');
		$("#CurrencyFrame")
			.contents()
			.find("input[type=submit]")
			.css('height', '50px');


		$("#AnchorFrame")
			.contents()
			.find("[for=FetchField_dependent_to]")
			.hide();
		$("#PriceFrame")
			.contents()
			.find("[for=FetchField_dependent_to]")
			.hide();
		$("#StockFrame")
			.contents()
			.find("[for=FetchField_dependent_to]")
			.hide();
		$("#AnchorFrame")
			.contents()
			.find("[for=FetchField_does_exist]")
			.hide();
		$("#PriceFrame")
			.contents()
			.find("[for=FetchField_does_exist]")
			.hide();
		$("#AnchorFrame")
			.contents()
			.find("[for=FetchField_price_delimiter]")
			.hide();
		$("#StockFrame")
			.contents()
			.find("[for=FetchField_price_delimiter]")
			.hide();
		$("#AnchorFrame")
			.contents()
			.find("[for=FetchField_price_index]")
			.hide();
		$("#StockFrame")
			.contents()
			.find("[for=FetchField_price_index]")
			.hide();
		$("#AnchorFrame")
			.contents()
			.find("[for=FetchField_price_regex]")
			.hide();
		$("#StockFrame")
			.contents()
			.find("[for=FetchField_price_regex]")
			.hide();
		$("#AnchorFrame")
			.contents()
			.find("[for=FetchField_field_name]")
			.hide();
		$("#PriceFrame")
			.contents()
			.find("[for=FetchField_field_name]")
			.hide();
		$("#StockFrame")
			.contents()
			.find("[for=FetchField_field_name]")
			.hide();
		$("#AnchorFrame")
			.contents()
			.find("[for=FetchField_description]")
			.hide();
		$("#PriceFrame")
			.contents()
			.find("[for=FetchField_description]")
			.hide();
		$("#StockFrame")
			.contents()
			.find("[for=FetchField_description]")
			.hide();
		$("#AnchorFrame")
			.contents()
			.find("[for=FetchField_site_id]")
			.hide();
		$("#PriceFrame")
			.contents()
			.find("[for=FetchField_site_id]")
			.hide();
		$("#StockFrame")
			.contents()
			.find("[for=FetchField_site_id]")
			.hide();
		$("#AnchorFrame")
			.contents()
			.find("[for=FetchField_selector_order]")
			.hide();
		$("#PriceFrame")
			.contents()
			.find("[for=FetchField_selector_order]")
			.hide();
		$("#StockFrame")
			.contents()
			.find("[for=FetchField_selector_order]")
			.hide();

		$("#AnchorFrame")
			.contents()
			.find("input[type=submit]")
			.css('width', '215px');
		$("#PriceFrame")
			.contents()
			.find("input[type=submit]")
			.css('width', '215px');
		$("#StockFrame")
			.contents()
			.find("input[type=submit]")
			.css('width', '215px');
		$("#AnchorFrame")
			.contents()
			.find("input[type=submit]")
			.css('height', '50px');
		$("#PriceFrame")
			.contents()
			.find("input[type=submit]")
			.css('height', '50px');
		$("#StockFrame")
			.contents()
			.find("input[type=submit]")
			.css('height', '50px');

		//Gizlenen inputların labellarını siliyorum

		document.getElementById('AnchorFrame')
			.contentWindow.document.getElementById("FetchField_dependent_to")
			.setAttribute("type", "hidden");
		document.getElementById('PriceFrame')
			.contentWindow.document.getElementById("FetchField_dependent_to")
			.setAttribute("type", "hidden");
		document.getElementById('StockFrame')
			.contentWindow.document.getElementById("FetchField_dependent_to")
			.setAttribute("type", "hidden");
		document.getElementById('AnchorFrame')
			.contentWindow.document.getElementById("FetchField_selector_order")
			.setAttribute("type", "hidden");
		document.getElementById('PriceFrame')
			.contentWindow.document.getElementById("FetchField_selector_order")
			.setAttribute("type", "hidden");
		document.getElementById('StockFrame')
			.contentWindow.document.getElementById("FetchField_selector_order")
			.setAttribute("type", "hidden");

		document.getElementById('AnchorFrame')
			.contentWindow.document.getElementById("FetchField_price_delimiter")
			.setAttribute("type", "hidden");
		document.getElementById('AnchorFrame')
			.contentWindow.document.getElementById("FetchField_price_index")
			.setAttribute("type", "hidden");
		document.getElementById('AnchorFrame')
			.contentWindow.document.getElementById("FetchField_price_regex")
			.setAttribute("type", "hidden");
		document.getElementById('StockFrame')
			.contentWindow.document.getElementById("FetchField_price_delimiter")
			.setAttribute("type", "hidden");
		document.getElementById('StockFrame')
			.contentWindow.document.getElementById("FetchField_price_index")
			.setAttribute("type", "hidden");
		document.getElementById('StockFrame')
			.contentWindow.document.getElementById("FetchField_price_regex")
			.setAttribute("type", "hidden");
		document.getElementById('AnchorFrame')
			.contentWindow.document.getElementById("FetchField_does_exist")
			.setAttribute("type", "hidden");
		document.getElementById('PriceFrame')
			.contentWindow.document.getElementById("FetchField_does_exist")
			.setAttribute("type", "hidden");

		//document.addEventListener("keydown", keyDownTextField, false);
		document.domain = 'prisync.com';

		document.getElementById('URLCheckFrame')
			.contentWindow.document.getElementById('checkUrl')
			.value = "google.com";
		document.getElementById('URLCheckFrame')
			.contentWindow.document.getElementsByClassName("pure-button pure-button-primary")[0].click();


		var handle = setInterval(function() {


			var isithidden = document.getElementById('URLCheckFrame')
				.contentWindow.document.getElementById('sendFormDiv')
				.style.length;
			if (isithidden === 0) {
				var btn = document.getElementById('URLCheckFrame')
					.contentWindow.document.createElement("Input");
				btn.value = "Send FFs";
				btn.className = "pure-button pure-button-primary sendbutton";
				btn.type = "Submit";
				var urltextarea = document.getElementById('URLCheckFrame')
					.contentWindow.document.getElementsByClassName('pure-button pure-button-primary')[1];
				urltextarea.parentNode.insertBefore(btn, urltextarea);
				console.log('Not Hidden');
				var sendbtn = document.getElementById('URLCheckFrame')
					.contentWindow.document.getElementsByClassName('sendbutton')[0];
				var clickaction = function() {

					var AncSel = document.getElementById('URLCheckFrame')
						.contentWindow.document.getElementById('anchorSelector')
						.value;
					var PriSel = document.getElementById('URLCheckFrame')
						.contentWindow.document.getElementById('priceSelector')
						.value;
					var StoSel = document.getElementById('URLCheckFrame')
						.contentWindow.document.getElementById('stockSelector')
						.value;
					var PriRgx = "";
					var Rgxval = document.getElementById('URLCheckFrame')
						.contentWindow.document.getElementById('priceRegex')
						.value;
					var AncSelInd = document.getElementById('URLCheckFrame')
						.contentWindow.document.getElementById('anchorSelectorIndex')
						.value;
					var PriSelInd = document.getElementById('URLCheckFrame')
						.contentWindow.document.getElementById('priceSelectorIndex')
						.value;
					var StoSelInd = document.getElementById('URLCheckFrame')
						.contentWindow.document.getElementById('stockSelectorIndex')
						.value;

					var PriDel = "";
					var PriDelval = document.getElementById('URLCheckFrame')
						.contentWindow.document.getElementById('priceDelimeter')
						.value;

					var PriDelInd = "";
					var PriDelIndval = document.getElementById('URLCheckFrame')
						.contentWindow.document.getElementById('priceIndex')
						.value;


					if (Rgxval != null) {
						PriRgx = Rgxval;
					}

					if (PriDelval != null) {
						PriDel = PriDelval;
					}

					if (PriDelIndval != null) {
						PriDelInd = PriDelIndval;
					}

					localStorage.setItem("AncSel", AncSel);
					localStorage.setItem("PriSel", PriSel);
					localStorage.setItem("StoSel", StoSel);
					localStorage.setItem("PriRgx", PriRgx);
					localStorage.setItem("AncSelInd", AncSelInd);
					localStorage.setItem("PriSelInd", PriSelInd);
					localStorage.setItem("StoSelInd", StoSelInd);
					localStorage.setItem("PriDelInd", PriDelInd);
					localStorage.setItem("PriDel", PriDel);
					console.log(AncSel + "," + PriSel + "," + StoSel);
					location.reload();
				};
				sendbtn.addEventListener("click", clickaction);




				clearInterval(handle);
				handle = 0;
			};
		}, 300);



	}, 4000);
};

//if (isN11 === true) {
//	var ReadyAnchorFFID = document.getElementsByClassName("table-striped")[0].getElementsByTagName("tr")[1].getElementsByTagName("td")[0].getElementsByTagName("a")[0].innerText;
//	var ReadyPriceFFID = document.getElementsByClassName("table-striped")[0].getElementsByTagName("tr")[2].getElementsByTagName("td")[0].getElementsByTagName("a")[0].innerText;
//	var ReadyStockFFID = document.getElementsByClassName("table-striped")[0].getElementsByTagName("tr")[3].getElementsByTagName("td")[0].getElementsByTagName("a")[0].innerText;
//	var AssignNewPriceFFID = document.getElementsByClassName("table-striped")[2].getElementsByTagName("td")[0].getElementsByTagName("input")[3];
//	var AssignNewStockFFID = document.getElementsByClassName("table-striped")[2].getElementsByTagName("td")[1].getElementsByTagName("input")[3];
//	var AssignNewAnchorFFID = document.getElementsByClassName("table-striped")[2].getElementsByTagName("td")[2].getElementsByTagName("input")[3];
//	AssignNewPriceFFID.value = ReadyPriceFFID;
//	AssignNewStockFFID.value = ReadyStockFFID;
//	AssignNewAnchorFFID.value = ReadyAnchorFFID;
//}
