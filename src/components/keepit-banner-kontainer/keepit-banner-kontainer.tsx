import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'keepit-banner-container',
  styleUrl: 'keepit-banner-kontainer.css',
  shadow: true,
  assetsDir: '../icons'
})


export class KeepitBannerComponent {
  @Prop({reflectToAttr: true, mutable: true}) showFullBanner: boolean;
  @Prop({attribute: 'text1'}) text1: string;
  @Prop({attribute: 'text2'}) text2: string;
  @Prop({attribute: 'text3'}) text3: string;
  @Prop({attribute: 'text4'}) text4: string;

  @Event() redirect: EventEmitter;
  @Event() toggleBunner: EventEmitter;

  makeOpen(){
    this.showFullBanner = !this.showFullBanner;
    this.toggleBunner.emit({value:this.showFullBanner});
  }

  handleUi2(){
    this.redirect.emit();
  }

  render() {
    let mainContent = (
      <div class="in-one-line">
        <div class="close-btn" onClick={this.makeOpen.bind(this)}></div>
        <div 
          class="new-experience-line" 
          onClick={this.handleUi2.bind(this)}
        >
          {`${this.text1} ${this.text2} ${this.text3}`}
        </div>
      </div>
    
    );
    if( this.showFullBanner){
      mainContent = (
        <div class="keepit-banner-container">
          <div 
            class="close-btn" 
            onClick={this.makeOpen.bind(this)}
          ></div>
          <div class="info-container">
            <div class="benefits-info">
              <div class="benefits-info_icon"></div>
              <div class="benefits-info_icon"></div>
              <div class="benefits-info_icon"></div>
              <div class="benefits-info_icon"></div>
            </div>
            <div 
              class="new-experience-btn"
              onClick={this.handleUi2.bind(this)}
            >
              <div class="secondary-text">{this.text1}</div>
              <div class="secondary-text">{this.text2}</div>
              <div class="main-text">{this.text3}</div>
            </div>
          </div>
          <div class="secondary-info-container">
            <div class="go-back-text">{this.text4}</div>
          </div>
        </div>
      )
    }

    return mainContent;
  }
}