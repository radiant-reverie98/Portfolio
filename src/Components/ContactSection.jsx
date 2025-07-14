import { Linkedin, LocateFixedIcon, LocateIcon, Mail, MapPin, Send, Twitter } from "lucide-react";
import { CIcon } from '@coreui/icons-react';
import {cibLeetcode} from '@coreui/icons';
import React from "react";
import { cn } from "../lib/utils";

function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I am always open to discuss new opportunities
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 ">
              Contact Information
            </h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <Mail className="h-6 w-6  text-primary" />
                </div>
                <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:stejendra98@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">stejendra98@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <MapPin className="h-6 w-6  text-primary" />
                </div>
                <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground hover:text-primary transition-colors">Jodhpur,Rajasthan</p>
                </div>
              </div>
            </div>
            <div className="pt-8">
                <h4 className="font-medium mb-4 ">Connect With Me</h4>
                <div className="flex space-x-4 justify-center">
                    <a href="https://www.linkedin.com/in/tejendra-singh98/" className="hover:text-primary/100" target="__blank"><Linkedin/></a>
                    <a href="https://x.com/tejendra_1103" className="hover:text-primary/100" target="__blank"><Twitter/></a>
                    <a href="https://x.com/tejendra_1103" className="hover:text-primary/100" target="__blank"><CIcon icon={cibLeetcode} size="2xl" /></a>

                </div>
            </div>
          </div>
          <div className="bg-card rounded-lg p-8 shadow-xs">
            <h3 className="text-2xl font-semibold mb-6 ">Send a message</h3>
            <form action="https://formspree.io/f/manbwdgk"  method="POST" className="space-y-6">
                <label htmlFor="name" className="block text-sm font-medium mb-2 ">Your Name</label>
                <input type="text" id="name" name="name" className = "w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="John Doe..."/>
                <label htmlFor="email" className="block text-sm font-medium mb-2 ">Your Email</label>
                <input type="email" id="name" name="email" className = "w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="johndoe@example.com"/>
                <label htmlFor="email" className="block text-sm font-medium mb-2 ">Your Message</label>
                <textarea type="text" id="message" name="message" className = "w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" placeholder="Hello, I would like to talk about..."/>
                <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2 "

                )}>Send Message <Send size={16}/></button>
            </form>
            
                
            
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
