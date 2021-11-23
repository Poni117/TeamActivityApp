export default function RangesUsers(users){
    
    if(users === null){

        return;
    }
    
    class ListNode {

        constructor(data) {
            this.id = 0;
            this.data = data;
            this.next = null;
            this.last = null;
        }
    }

    let ranges = new ListNode(null);

    users.forEach(user => {

        if (ranges.data === null) {

            ranges.data = user;
            
            return;
        }
        
        let pointer = ranges;

        while (pointer != null) {

            if (user.actions.numOfActions > pointer.data.actions.numOfActions && pointer.last === null) {
                
                let node = new ListNode();
                
                node.data = user;
                
                node.next = pointer;
                
                pointer.last = node;

                ranges = node;

                break;
            }

            if (user.actions.numOfActions > pointer.data.actions.numOfActions && pointer.last !== null) {
                
                let node = new ListNode();
                
                node.data = user;
                
                pointer.last.next = node;

                node.last = pointer.last;
                
                node.next = pointer;

                pointer.last = node;
                
                break;
            }
            

            if (user.actions.numOfActions === pointer.data.actions.numOfActions) {
               
                let node = new ListNode();
                node.id = pointer.id + 1;
                node.data = user;

                node.last = pointer;
                node.next = pointer.next;

                pointer.next = node;

                break
            }
            
            if (pointer.next === null) {
                
                let node = new ListNode();
                node.id = pointer.id + 1;
                node.data = user;

                pointer.next = node;
            }

            pointer = pointer.next;
        }
    })

    let pointer = ranges;

    const top = [];

    while (pointer !== null) {
        
        top.push(pointer.data);

        pointer = pointer.next
    } 

    return top;
}
