

      coursecontentname = new Array();
      coursecontentlinks = new Array();

      coursecontentname.push('1. Introduction');
      coursecontentlinks.push('1. Introduction.html');
      

    
      coursecontentname.push('2. Critical Section and Non Critical Section');
      coursecontentlinks.push('2. Critical Section and Non Critical Section.html');
      

    
      coursecontentname.push('3. Various Conditions of a Synchronization Mechanism');
      coursecontentlinks.push('3. Various Conditions of a Synchronization Mechanism.html');
      

    
      coursecontentname.push('4. Lock Synchronization Mechanism');
      coursecontentlinks.push('4. Lock Synchronization Mechanism.html');
      

    
      coursecontentname.push('5. TSL Synchronization Mechanism');
      coursecontentlinks.push('5. TSL Synchronization Mechanism.html');
      

    
      coursecontentname.push('6. Problems on TSL');
      coursecontentlinks.push('6. Problems on TSL.html');
      

    
      coursecontentname.push('7. Strict Alternation Synchronization Mechanism');
      coursecontentlinks.push('7. Strict Alternation Synchronization Mechanism.html');
      

    
      coursecontentname.push('8. Disable Interrupts Synchronization Mechanism');
      coursecontentlinks.push('8. Disable Interrupts Synchronization Mechanism.html');
      

    
      coursecontentname.push('9. Interested Variables Synchronization Mechanism');
      coursecontentlinks.push('9. Interested Variables Synchronization Mechanism.html');
      

    
      coursecontentname.push('10. Peterson Synchronization Mechanism');
      coursecontentlinks.push('10. Peterson Synchronization Mechanism.html');
      

    
      coursecontentname.push('11. Problems on Non busy Waiting Synchronization Techniques');
      coursecontentlinks.push('11. Problems on Non busy Waiting Synchronization Techniques.html');
      

    
      coursecontentname.push('12. Producer Consumer Problem');
      coursecontentlinks.push('12. Producer Consumer Problem.html');
      

    
      coursecontentname.push('13. Binary Semaphores');
      coursecontentlinks.push('13. Binary Semaphores.html');
      

    
      coursecontentname.push('14. Problems on Binary Semaphore');
      coursecontentlinks.push('14. Problems on Binary Semaphore.html');
      

    
      coursecontentname.push('15. Dining Philosopher Problem');
      coursecontentlinks.push('15. Dining Philosopher Problem.html');
      

    
      coursecontentname.push('16. Counting Semaphore');
      coursecontentlinks.push('16. Counting Semaphore.html');
      

    
      coursecontentname.push('17. Deadlocks');
      coursecontentlinks.push('17. Deadlocks.html');
      

    
      coursecontentname.push('18. Deadlock Handling Methods');
      coursecontentlinks.push('18. Deadlock Handling Methods.html');
      

    
      coursecontentname.push('19. Bonus  How to proceed further');
      coursecontentlinks.push('19. Bonus  How to proceed further.html');
      

    





 $(document).ready(function(){
          	nav = "";
        	for(i=0;i<coursecontentname.length;i++){
            	nav+='<li><a class="dropdown-item" href="'+coursecontentlinks[i]+'">'+coursecontentname[i]+'</a></li>';
            }
          $('#coursecontent').html(nav);
        });