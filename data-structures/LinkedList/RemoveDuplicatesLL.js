const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

var deleteDuplicates = function(head) {
  if( !head ){
     return
  }
  
  if( !head.next){
    return head
  }
  var current = head
    
  if( !current.next.next ){
      if( current.data == current.next.data ){
           current.next = null
            return head
             
      }
      else{
        return head
      }
  }
    
  
  while(current.next){
 		if( current.data == current.next.data ){
            
               var temp = current.next;
               current.next = current.next.next
                temp.next = null
                 //current = current.next
          
        } 
        else{
          current = current.next
        }
  }
  
  return head

    
};

