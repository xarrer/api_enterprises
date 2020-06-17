import 'package:flutter/material.dart';

class NavigationBar extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
        child: Row(
      children: [
        Container(
          height: 200,
          width: 200,
          child: SizedBox(
            height: 150,
            width: 200,
            child: Image(
              image: AssetImage('assets/images/logo.png'),
            ),
          ),
        ),

        Row(
          children: [
            NavBarItem('Products'),
            SizedBox(width:10),
            
            NavBarItem('About'),
            SizedBox(width:10),
            
            NavBarItem('Services'),
            SizedBox(width:10),

            NavBarItem('Customer Care'),
            SizedBox(width:10),
          ],
        )

      ],
    ));
  }
}

class NavBarItem extends StatelessWidget {
  final String title;

  NavBarItem(this.title);

  @override
  Widget build(BuildContext context) {
    return Text(
      title,
      style: TextStyle(fontSize: 16.0, fontFamily: ''),
    );
  }
}
