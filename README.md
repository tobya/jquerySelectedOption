SelectedOption
============

Allows all Select Form elements to specify an initial value as a 'data-SelectedOption' attribute on the select tag.


**Note: Backward Comptatibility Break** select attribute renamed to **'data-SelectedOption' instead of 'data_SelectedOption** (dash instead of underbar) to match HTML5 custom attribute specifications (i.e. now the html will validate).

html

    <select name="select"  data-SelectedOption="3">
      <option value="ERROR" data-noscriptitem>ERROR: If you see this an error has occured</option>
      <option value="1">Banana</option>
      <option value="2">Apple</option>
      <option value="3">Pear</option>
      <option value="4">Orange</option>
      
    </select>


javascript

    <script type="text/javascript">
    //Execute when document is ready.
    jQuery('Document').ready(function(){
    jQuery('Select').SelectedOption();
    });
    </script>




Option 3 Pear will be selected.


<a href="https://github.com/tobya/jquerySelectedOption/blob/gh-pages/demo/demo.html">Demo</a>
