/**
 *
 * @author 
 *
 */
class BtnBase extends egret.Sprite {
    public constructor() {
        super()
    }
	
    private label: egret.TextField = new egret.TextField;
    private WIDTH:number = 120;
    private HEIGHT: number = 50;
    
	public init(_name:string):void
	{
        this.graphics.beginFill(0xcccccc,1);
        this.graphics.drawRect(0,0,this.WIDTH,this.HEIGHT);
        this.graphics.endFill();
        
        this.addChild(this.label);
//        this.label.size = 14;
        this.label.textColor = 0x000000;
        this.label.width = this.WIDTH;
        this.label.height = this.HEIGHT;
        this.label.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.label.textAlign = egret.HorizontalAlign.CENTER;
        this.label.text = _name;
        
        
	}
	
	
	
}
