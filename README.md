# countdown for webpage
The countdown for webpage is small jQuery plugin that will help you to add countdown timer to your webpage.
some advantages of this plugin are:
1.You can add multiple countdown timers on a single webpage.
2.Support for any timezone.(Default timezone is IST i.e +5:30)
3.easy to add.

How To Use?
Ans: 
  a.Add countdown.js file to your webpage after jquery script.
  b.your html structure should be like 
    <div class="countdown-timer">
  		<span data-name="days0"></span>
  		<span data-name="days1"></span>
  		<span data-name="hours0"></span>
  		<span data-name="hours1"></span>
  		<span data-name="minutes0"></span>
  		<span data-name="minutes1"></span>
  		<span data-name="seconds0"></span>
  		<span data-name="seconds1"></span>
	  </div>
	  
you can use any html elements only required thing is the number of elements should be 
8(2 for days,2 for hours,2 for minutes and 2 for seconds). and the attribute 'data-name' should be same as shown in above example.

c.add countdown like

  $(selector).addCountDown(date,timeoffset);
  
  here parameters are:
  1.selector:Any Jquery selector.
  2.date: it is javascript Date object.
  3.timeoffset[default:-330]: timeoffset is your GMT timeoffset with negetive sign.
    example: if your Date object is in GMT+5:30 then your timeoffset will be -330
            (+5:30 = 5hrs 30 minutes = 5*60+30 = 330minutes and negetive + is -).
    *if your Date object is in IST format then you can ignore timeoffset parameter.        
