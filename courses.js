
      coursename = new Array();
      courselinks = new Array();

      coursename.push('1. Operating System Part1');
      courselinks.push('osp1/OperatingSystem-Part1.html');
      
    
      coursename.push('2. Operating System Part 2');
      courselinks.push('osp2/OperatingSystem-Part2.html');

      coursename.push('3. Operating System Part 3');
      courselinks.push('osp3/OperatingSystem-Part3.html');

      coursename.push('4. Operating System Part 4');
      courselinks.push('osp4/OperatingSystem-Part4.html');
      

    $(document).ready(function(){
          	nav = "";
        	for(i=0;i<coursename.length;i++){
            	nav+='<li><a class="dropdown-item" href="'+courselinks[i]+'">'+coursename[i]+'</a></li>';
            }
          $('#navigationcourses').html(nav);
        });