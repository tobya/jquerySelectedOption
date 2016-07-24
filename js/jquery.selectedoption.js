/*************************************************************
 Copyright © 2012 Toby Allen (http://github.com/tobya)

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute, sub-license, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
 subject to the following conditions:

 The above copyright notice, and every other copyright notice found in this software, and all the attributions in every file, and this permission notice shall be included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT.
 IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 ****************************************************************/
/**
 * User: tobya Toby@toflidium.com
 * Date: 11/11/12
 * Time: 14:03
 * url: http://github.com/tobya/jquerySelectedOption
 *
 * Simple jQuery Script to set the initial item of a select easily.
 *
 * <select name="myselect" data-SelectedOption="Value2">
 *   <option value="Value1"> Value 1 </Option>
 *   <option value="Value2"> Value 2 </Option>
 * </select>
 */




//Call jQuery('select').SelectedOption() to run on all select elements on the page.


jQuery.fn.SelectedOption = function(inoptions){

        /*If no selector provided, select all Select inputs on page*/
    var defaults = {
        selector : 'Select'
      };
    
    //Decode type of inoptions
    if (jQuery.isPlainObject(inoptions))
    {   
      var options = jQuery.extend(defaults, inoptions)    
    }
    else if(inoptions == undefined){
      var options = defaults;
    }
    else {
      var options = {'selector' : inoptions}
    }

    //If selector has been passed use this, otherwise call selector first.
    if (this.selector.toString() == ""){
      var useThis = jQuery(options.selector);
    }else{
       var useThis = this;
    }

    //iternate over every found select input control on page.
   useThis.each(function(){

            var sel = jQuery(this);
            var selval = sel.data().selectedoption;
             //Only Set value If data-SelectedOption has been provided and is not an empty string.
             if (selval !== undefined ){
                if ( selval.length !== 0){
                    sel.val(selval);               
               } 

             } 

             //if no-script item exists remove it.
             $('#'+ sel.attr('id') + " [data-noscriptitem]").remove();
           

        });

  return this;

};


