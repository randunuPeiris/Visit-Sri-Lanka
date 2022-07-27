

<!DOCTYPE html>
<html lang="en">

<head>

    

</head>
<script>

	function validation()
	{
		if(document.form1.un.value=="")
		{
			window.alert("Please enter user name");
			return;	
		}
		if(document.form1.pw.value=="")
		{
			window.alert("Please enter password");
			return;	
		}
		if((document.form1.cb1.checked) && (document.form1.cb2.checked))
		{
			window.alert("please select one option from check boxes");
			return;	
		}
	
	
	}

</script>
<html>