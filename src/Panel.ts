import IPanel from './IPanel'
import PanelButton from './PanelButton'

class Panel implements IPanel
{
  orientation: string = "top";
  /**
   * percentage of the panel's width in accordance with the screen's width
   */
  width: number = 100;
  height: number = 35;
  color: string = "red";
  elem: HTMLElement;
  left_tray: PanelButton[];
  right_tray: PanelButton[];

  onclick()
  {
    console.log("You clicked the panel");
  }

  leftclick()
  {
  
  }

  rightclick()
  {
  
  }

  render(): HTMLElement
  {
    // render left menu
    //this.elem.appendChild(this.left_tray):
  
    // render right app tray
    //this.elem.appendChild(this.right_tray):
    return this.elem;
  }

  update(event: MouseEvent)
  {
    this.elem.style.width =`${this.width}%`;
    this.elem.style.height = `${this.height}px`;
    this.elem.style.top = `0`;
    this.elem.style.left = `0`; 
    this.elem.style.backgroundColor = `${this.color}`; 
  }

  constructor()
  {
    this.elem = document.createElement('div');
  
    this.left_tray = new Array(new PanelButton(33, 33, "yellow", function() {console.log("left")} ));
    this.right_tray = new Array(new PanelButton(33, 33, "yellow", function() {console.log("right")}));
  
    var lt = document.createElement('div');
    lt.style.float = "left";
    for (var i = 0; i < this.left_tray.length; i++)
      lt.appendChild(this.left_tray[i].render());
  
    var rt = document.createElement('div');
    rt.style.float = "right";
    for (var i = 0; i < this.right_tray.length; i++)
      rt.appendChild(this.right_tray[i].render());
  
    this.elem.appendChild(lt);
    this.elem.appendChild(rt);
  
    this.update(null);
  }

}

export default Panel;
