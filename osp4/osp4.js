
      coursecontentname = new Array();
      coursecontentlinks = new Array();

      coursecontentname.push('1. Introduction');
      coursecontentlinks.push('1. Introduction.html');
      

    
      coursecontentname.push('2. Understanding File Access using System Calls');
      coursecontentlinks.push('2. Understanding File Access using System Calls.html');
      

    
      coursecontentname.push('3. File Allocation Methods - Contiguous Allocation');
      coursecontentlinks.push('3. File Allocation Methods - Contiguous Allocation.html');
      

    
      coursecontentname.push('4. File Allocation Methods - Linked List Allocation');
      coursecontentlinks.push('4. File Allocation Methods - Linked List Allocation.html');
      

    
      coursecontentname.push('5. File Allocation Methods - FAT Allocation');
      coursecontentlinks.push('5. File Allocation Methods - FAT Allocation.html');
      

    
      coursecontentname.push('6. Indexed Allocation Method');
      coursecontentlinks.push('6. Indexed Allocation Method.html');
      

    
      coursecontentname.push('7. Free Space Management');
      coursecontentlinks.push('7. Free Space Management.html');
      

    
      coursecontentname.push('8. Understanding the structure of Hard disk');
      coursecontentlinks.push('8. Understanding the structure of Hard disk.html');
      

    
      coursecontentname.push('9. Basic Disk Scheduling Algorithms - FCFS, SSTF');
      coursecontentlinks.push('9. Basic Disk Scheduling Algorithms - FCFS, SSTF.html');
      

    
      coursecontentname.push('10. Popular Disk Scheduling Algorithms - SCAN, C-SCAN, LOOK, C-LOOK');
      coursecontentlinks.push('10. Popular Disk Scheduling Algorithms - SCAN, C-SCAN, LOOK, C-LOOK.html');
      

    
      coursecontentname.push('11. Kernel, System calls, Modes of execution');
      coursecontentlinks.push('11. Kernel, System calls, Modes of execution.html');
      

    
      coursecontentname.push('12. Fork () system call');
      coursecontentlinks.push('12. Fork () system call.html');
      

    
      coursecontentname.push('13. Threads');
      coursecontentlinks.push('13. Threads.html');
      

    
      coursecontentname.push('14. Bonus  How to proceed further');
      coursecontentlinks.push('14. Bonus  How to proceed further.html');
      

    





 $(document).ready(function(){
          	nav = "";
        	for(i=0;i<coursecontentname.length;i++){
            	nav+='<li><a class="dropdown-item" href="'+coursecontentlinks[i]+'">'+coursecontentname[i]+'</a></li>';
            }
          $('#coursecontent').html(nav);
        });