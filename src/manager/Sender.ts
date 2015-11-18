/**
 *
 * @author 
 *
 */
class Sender {
	public constructor() {
	}
	
	public static sender(_action:string, _message:string):void
	{
        Manager.instance().receiver(_action,_message);   
	}
	
}
