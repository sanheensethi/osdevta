
     
      coursecontentname = new Array();
      coursecontentlinks = new Array();

      coursecontentname.push('1. Introduction');
      coursecontentlinks.push('1. Introduction.html');
      

    
      coursecontentname.push('2. Basics of Memory Management (Cover it only if you have not watched part 1)');
      coursecontentlinks.push('2. Basics of Memory Management (Cover it only if you have not watched part 1).html');
      

    
      coursecontentname.push('3. Paging');
      coursecontentlinks.push('3. Paging.html');
      

    
      coursecontentname.push('4. Problems on Paging');
      coursecontentlinks.push('4. Problems on Paging.html');
      

    
      coursecontentname.push('5. Multilevel Paging');
      coursecontentlinks.push('5. Multilevel Paging.html');
      

    
      coursecontentname.push('6. Multilevel Paging Problems');
      coursecontentlinks.push('6. Multilevel Paging Problems.html');
      

    
      coursecontentname.push('7. Page Table Entry');
      coursecontentlinks.push('7. Page Table Entry.html');
      

    
      coursecontentname.push('8. Page Table Entry Problems');
      coursecontentlinks.push('8. Page Table Entry Problems.html');
      

    
      coursecontentname.push('9. Virtual Memory');
      coursecontentlinks.push('9. Virtual Memory.html');
      

    
      coursecontentname.push('10. Average Memory Access Time (AMAT)');
      coursecontentlinks.push('10. Average Memory Access Time (AMAT).html');
      

    
      coursecontentname.push('11. Translation Lookaside Buffer (TLB)');
      coursecontentlinks.push('11. Translation Lookaside Buffer (TLB).html');
      

    
      coursecontentname.push('12. Problems on TLB');
      coursecontentlinks.push('12. Problems on TLB.html');
      

    
      coursecontentname.push('13. Frame Allocation');
      coursecontentlinks.push('13. Frame Allocation.html');
      

    
      coursecontentname.push('14. Page Replacement Algorithms');
      coursecontentlinks.push('14. Page Replacement Algorithms.html');
      

    
      coursecontentname.push('15. Advanced Problems on Page Replacement Algorithms');
      coursecontentlinks.push('15. Advanced Problems on Page Replacement Algorithms.html');
      

    
      coursecontentname.push('16. Bonus section  How to proceed further');
      coursecontentlinks.push('16. Bonus section  How to proceed further.html');
      

    
      

    $(document).ready(function(){
          	nav = "";
        	for(i=0;i<coursecontentname.length;i++){
            	nav+='<li><a class="dropdown-item" href="'+coursecontentlinks[i]+'">'+coursecontentname[i]+'</a></li>';
            }
          $('#coursecontent').html(nav);
        });