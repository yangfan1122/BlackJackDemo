/**
 *
 * @author 
 *
 */
class Manager extends egret.EventDispatcher {
    private static _instance: Manager = new Manager;
    
	public constructor() {
        super();
        if(Manager._instance){
            throw new Error("Use Manager.instance() instead of new.");
        }
	}
	
    private pot: number = 0;
    private step: number = 0;
	
    public static instance():Manager
    {
        return Manager._instance;
    }
    
	public receiver(_action:string, _message:string):void
	{
	    if(_action == Action.WAGER)
    	  {
        	if(parseInt(_message) > PlayerModel.chips)
            {
                //不足
                this.dispatchEvent(new egret.Event(Events.CHIP_LACK));
                return;
            }
    	      if(this.step==0){
    	          //第一次下注
                this.step++;
                this.action2();
    	      }
        	  
    	  }
	}
	
	public action1()
	{
	    //下注
	}
	
	public action2()
	{
	    //玩家 明牌 1
    	  //庄家 明牌 1
    	  //玩家 明牌 2
    	  //庄家 暗牌 2
    	  console.log('action2')
	}
	
	public action3()
	{
	    //是否 保险
	}
	
	public action4()
	{
	    //玩家 加注、投降、分牌    
	}
	
	public action5()
	{
	    //询问，直至最后一人加牌完成
    	  //荷官必须加牌直至超过17点
	}
	
	public action6()
	{
	    //出结果
    	  //回收牌
	}
	
	
}
