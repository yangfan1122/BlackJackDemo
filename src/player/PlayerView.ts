/**
 *
 * @author 
 *
 */
class PlayerView extends egret.Sprite {
	public constructor() {
        super();
	}
	
    private wagerBtn: BtnBase = new BtnBase;
    private inputText: egret.TextField = new egret.TextField;
    private chipsText: egret.TextField = new egret.TextField;
	
    public init():void
    {
        this.inputText.type = egret.TextFieldType.INPUT;
        this.inputText.text = "100";
        this.inputText.width = 150;
        this.inputText.height = 50;
        this.inputText.border = true;
        this.inputText.borderColor = 0xffffff;
        this.addChild(this.inputText);
        
        this.wagerBtn.init("下注");
        this.wagerBtn.touchEnabled = true;
        this.wagerBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickWagerBtn, this);
        this.addChild(this.wagerBtn);
        this.wagerBtn.x = this.inputText.x + this.inputText.width + 10;
        
        this.chipsText.text = PlayerModel.chips.toString();
        this.chipsText.x = this.wagerBtn.x + this.wagerBtn.width + 10;
        this.chipsText.y = this.inputText.y + 10;
        this.chipsText.width = 100;
        this.chipsText.height = 50;
        this.addChild(this.chipsText);
        
    }
    
    private clickWagerBtn(event:egret.TouchEvent):void
    {
        this.wager(this.inputText.text);
    }
	
	private wager(_bet:string):void
	{
        Sender.sender(Action.WAGER, _bet);
	}
	
}
