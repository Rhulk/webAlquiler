package com.alquiler.Bike.security.conf;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;	



import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@Configuration	
@EnableWebSecurity	
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	
	
	// Auth in Memory
	@Override		
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.inMemoryAuthentication()
		.withUser("user").password("{noop}1234").roles("USER")
		.and()
		.withUser("admin").password("{noop}1234").roles("ADMIN");
	}
	
	

	
    @Override
    public void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
        	.antMatchers("/contac").hasRole("ADMIN")
            .antMatchers("/").hasRole("USER")
            .and().formLogin()
            .and().logout();
    }
	
}   
