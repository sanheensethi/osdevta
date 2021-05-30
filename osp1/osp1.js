


      coursecontentname = new Array();
      coursecontentlinks = new Array();

      coursecontentname.push('1. Introduction');
      coursecontentlinks.push('1. Introduction.html');
      

    
      coursecontentname.push('2. Introduction to Operating Systems');
      coursecontentlinks.push('2. Introduction to Operating Systems.html');
      

    
      coursecontentname.push('3. Operating System Concepts');
      coursecontentlinks.push('3. Operating System Concepts.html');
      

    
      coursecontentname.push('4. CPU Scheduling Algorithms - SJF, SRTF, FCFS');
      coursecontentlinks.push('4. CPU Scheduling Algorithms - SJF, SRTF, FCFS.html');
      

    
      coursecontentname.push('5. Comparision of FCFS, SJF and SRTF - Advantages and Disadvantages');
      coursecontentlinks.push('5. Comparision of FCFS, SJF and SRTF - Advantages and Disadvantages.html');
      

    
      coursecontentname.push('6. CPU Scheduling Algorithms - LJF, LRTF, Priority-based, HRRN');
      coursecontentlinks.push('6. CPU Scheduling Algorithms - LJF, LRTF, Priority-based, HRRN.html');
      

    
      coursecontentname.push('7. Basics of Number System');
      coursecontentlinks.push('7. Basics of Number System.html');
      

    
      coursecontentname.push('8. Memory Allocation Techniques');
      coursecontentlinks.push('8. Memory Allocation Techniques.html');
      

    
      coursecontentname.push('9. How to proceed further');
      coursecontentlinks.push('9. How to proceed further.html');
      

    



 $(document).ready(function(){
          	nav = "";
        	for(i=0;i<coursecontentname.length;i++){
            	nav+='<li><a class="dropdown-item" href="'+coursecontentlinks[i]+'">'+coursecontentname[i]+'</a></li>';
            }
          $('#coursecontent').html(nav);
        });