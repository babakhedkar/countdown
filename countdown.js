
(function ($) {
    $.fn.addCountDown = function (evntDt,ofst) {
		var $cntdnCntnr = this;
		var IST_OFFSET = ofst || -330;
		
		var ts = new Date();
		var LclOfst = ts.getTimezoneOffset();
		
		var lclDt = new Date();
		var tm = lclDt.getTime() + (LclOfst * 60 * 1000);
		var SI_PKL_srvrDt = new Date(tm);
		
        var remainTime = null;
        var DisplayCountdown = function (dtOne, dtTwo) {

            remainTime = dtOne.getTime() - dtTwo.getTime();
            
            var intrvl = setInterval(function () {
                remainTime -= 1000;
                var dtObj = GetCntDnTime(remainTime);
				if (!dtObj) {
                    var eId = $cntdnCntnr.attr('data-intrvl-Id');
                    if (eId)
                        clearInterval(eId);
					
                    dtObj = {
                        'days': '00',
                        'hours': '00',
                        'minutes': '00',
                        'seconds': '00'
                    };
                }
				for (var k in dtObj) {
					var val = dtObj[k];
					var arr = val.toString().split('');
					for (var i = 0; i < arr.length; i++) {
						setDtaClass((k + i), arr[i]);
					}
				}
            }, 1000);
            $cntdnCntnr.attr('data-intrvl-Id', intrvl);
        };

        evntDt = evntDt.getTime() + (IST_OFFSET * 60 * 1000);
        evntDt = new Date(evntDt);

        DisplayCountdown(evntDt, SI_PKL_srvrDt);

        function setDtaClass(nm, val) {
            var $span = $('[data-name="' + nm + '"]', $cntdnCntnr);
            var dtaCls = 'count' + val;

            if ($span.attr('data-class') == dtaCls);
            else {
                $span.text(val);
                $span.attr('data-class', dtaCls);
            }
        }

        var GetCntDnTime = function (rmntime) {

            var ds = Math.floor(rmntime / 1000 / 60 / 60 / 24);
            rmntime -= ds * 1000 * 60 * 60 * 24

            var hrs = Math.floor(rmntime / 1000 / 60 / 60);
            rmntime -= hrs * 1000 * 60 * 60

            var mnts = Math.floor(rmntime / 1000 / 60);
            rmntime -= mnts * 1000 * 60

            var scnds = Math.floor(rmntime / 1000);

            if (ds < 0 || hrs < 0 || mnts < 0 || scnds < 0) return false;
            else {
                ds = ds < 10 ? ('0' + ds) : ds;
                hrs = hrs < 10 ? ('0' + hrs) : hrs;
                mnts = mnts < 10 ? ('0' + mnts) : mnts;
                scnds = scnds < 10 ? ('0' + scnds) : scnds;
                var tmObj = {
                    'days': ds,
                    'hours': hrs,
                    'minutes': mnts,
                    'seconds': scnds
                };
                return tmObj;
            }
        };
        return this;
    }
}(jQuery));
