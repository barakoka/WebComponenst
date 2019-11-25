import { Component, h, Prop, State, Method } from "@stencil/core";

@Component({
    tag: 'keepit-side-drawer',
    styleUrl: './side-drawer.css',
    shadow: true
})
export class SideDrawer {
    @State() showContact = false;

    @Prop({attribute: 'title', reflectToAttr: true}) titleName: string; 
    // with Prop() stencil will watch for titleName property from outside and will rerender part 
    // which changed
    @Prop({ reflectToAttr: true, mutable: true}) open: boolean;

    onCloseDrawer(){
        this.open = false;
    }

    onContentChange(content: string){
        this.showContact = content === 'contact';
    }
    
    @Method()
    async makeOpen(){
        this.open = true;
    }


    render(){
        let mainContent = <slot />;
        if(this.showContact){
            mainContent = (
                <div id="contact-information">
                    <h2>Contact Information</h2>
                    <p>Your cant reach us via phone or email.</p>
                    <ul>
                        <li>Phone: 1234567890</li>
                        <li>Email:
                            <a href="mailto:something@something.com">something@something.com</a>
                        </li>
                    </ul>
                </div>
            );
        }


        let content = (
            <aside>
                <header>
                    <button onClick={this.onCloseDrawer.bind(this)}>X</button>
                    <h1>{this.titleName}</h1>
                </header>
                <section id="tabs">
                    <button 
                        class={this.showContact ? '' : 'active'}
                        onClick={this.onContentChange.bind(this, 'nav')}
                    >
                        Navigation
                    </button>
                    <button 
                        class={this.showContact ? 'active' : ''}
                        onClick={this.onContentChange.bind(this, 'contact')}
                    >
                        Contact
                    </button>
                </section>
                <main>
                    {mainContent}
                </main>
            </aside>
        );
            
        return content;
    }
}