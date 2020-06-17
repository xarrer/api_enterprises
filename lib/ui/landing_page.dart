import 'package:flutter/material.dart';
class LandingPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Row(
        children: [
          CircleAvatar(
            backgroundImage: AssetImage('images/logo.png'),

          ),
          NavBarItem('Home'),
          NavBarItem('Products'),
          NavBarItem('Services'),
          NavBarItem('About'),
          NavBarItem('Customer Care'),
          
        ],
      )
    );
  }
}

class NavBarItem extends StatelessWidget {
  final String title;

NavBarItem(this.title);

  @override
  Widget build(BuildContext context) {
    return Text(
      title,
      style: TextStyle(fontSize: 16.0,fontFamily:''),
    );
  }
}