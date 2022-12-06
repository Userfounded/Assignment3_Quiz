function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    var vertices = [

      //Number 2
        // Face-Left-Back 2       // Orange               // Surface orientation
        3, -3.3, -1,              1, 0.5, 0, 0, 1, 0,    // Index:  0    
        1.7, 0, -1,               1, 0.5, 0, 0, 1, 0,    
        1.7, 0, -1,               1, 0.5, 0, 0, 1, 0,    
        3, -3.3, -1,              1, 0.5, 0, 0, 1, 0,    
        // Face-Left-Up 2         // White
        3.4, -3.3, 0,             1, 1, 1, 0, 1, 0,    
        2, -3.3, -1,              1, 1, 1, 0, 1, 0,    
        2, -3.3, -1,              1, 1, 1, 0, 1, 0,   
        3.4, -3.3, 0,             1, 1, 1, 0, 1, 0,   
        // Face-Left-Right 2      // Green
        1.7, -3, -1,              0, 1, 0, 1, 0, 0,   
        1.7, -3, 0,               0, 1, 0, 1, 0, 0,   
        3, -3, 0,                 0, 1, 0, 1, 0, 0,   
        3, -3, -1,                0, 1, 0, 1, 0, 0,   
        // Face-Left-Left 2       // Orange
        3, -3.3, -1,              1, 0.5, 0, 0, -1, 0,    
        3, -3, -1,                1, 0.5, 0, 0, -1, 0,    
        3, -3, 0,                 1, 0.5, 0, 0, -1, 0,    
        3, -3.3, 0,               1, 0.5, 0, 0, -1, 0,   
        // Face-Left-Front 2      // Orange
        3, -3.3, 0,               1, 0.5, 0, 0, 1, 0,   
        1.7, -3.3, 0,             1, 0.5, 0, 0, 1, 0,   
        1.7, -3, 0,               1, 0.5, 0, 0, 1, 0,   
        3, -3, 0,                 1, 0.5, 0, 0, 1, 0,   
        // Face-Left-Down 2       // White
        2.5, -0.8, -1,            1, 1, 1, 0, 1, 0,    
        2.5, -0.8, 0,             1, 1, 1, 0, 1, 0,   
        1.7, -0.8, 0,             1, 1, 1, 0, 1, 0,   
        1.7, -0.8, -1,            1, 1, 1, 0, 1, 0,    
        // Face-Down-Left 2       // Green
        2.9, 0.8, -1,             0, 1, 0, 1, 0, 0,   
        2.9, 0.8, 0,              0, 1, 0, 1, 0, 0,   
        2.9, -1.2, 0,             0, 1, 0, 1, 0, 0,    
        2.9, -1.2, -1,            0, 1, 0, 1, 0, 0,    
        // Face-Down-Down 2       // White
        2.9, 0.8, -1,             1, 1, 1, 0, 1, 0,    
        2.9, 0.8, 0,              1, 1, 1, 0, 1, 0,    
        1.8, 0.8, 0,              1, 1, 1, 0, 1, 0,    
        1.8, 0.8, -1,             1, 1, 1, 0, 1, 0,    
        // Face-Down-Front 2      // Orange
        2.9, 0.8, 0,              1, 0.5, 0, 0, 1, 0,    
        2.5, 0.8, 0,              1, 0.5, 0, 0, 1, 0,    
        2.5, -1, 0,               1, 0.5, 0, 0, 1, 0,    
        2.9, -1, 0,               1, 0.5, 0, 0, 1, 0,     
        // Face-Middle-Front 2    // Orange
        2.9, -1.2, 0,             1, 0.5, 0, 0, 1, 0,   
        2.9, -0.8, 0,             1, 0.5, 0, 0, 1, 0,    
        1.8, -0.8, 0,             1, 0.5, 0, 0, 1, 0,    
        1.8, -1.2, 0,             1, 0.5, 0, 0, 1, 0,    
        // Face-Middle-Back 2     // Orange
        2.9, -1.2, -1,            1, 0.5, 0, 0, 1, 0,    
        2.9, -0.8, -1,            1, 0.5, 0, 0, 1, 0,    
        1.7, -0.8, -1,            1, 0.5, 0, 0, 1, 0,    
        1.7, -1.2, -1,            1, 0.5, 0, 0, 1, 0,   
        // Face-Down-Back 2       // Orange
        2.9, 0.8, -1,             1, 0.5, 0, 0, 1, 0,    
        2.5, 0.8, -1,             1, 0.5, 0, 0, 1, 0,    
        2.5, -1, -1,              1, 0.5, 0, 0, 1, 0,    
        2.9, -1, -1,              1, 0.5, 0, 0, 1, 0,    
        // Face-Middle-Up 2       // White
        2.9, -1.2, 0,             1, 1, 1, 0, 1, 0,    
        2.9, -1.2, -1,            1, 1, 1, 0, 1, 0,   
        2, -1.2, -1,              1, 1, 1, 0, 1, 0,    
        2, -1.2, 0,               1, 1, 1, 0, 1, 0,    
        // Face-Middle-Up-Left 2  // Green
        2, -1.2, -1,              0, 1, 0, 0, 1, 0,    
        2, -1.2, 0,               0, 1, 0, 0, 1, 0,    
        2, -3.3, 0,               0, 1, 0, 0, 1, 0,    
        2, -3.3, -1,              0, 1, 0, 0, 1, 0,     
        // Face-Middle-Up-Up 2    // White
        3, -3.3, -1,              1, 1, 1, 0, 1, 0,    
        3, -3.3, 0,               1, 1, 1, 0, 1, 0,    
        1.7, -3.3, 0,             1, 1, 1, 0, 1, 0,    
        1.7, -3.3, -1,            1, 1, 1, 0, 1, 0,     
        // Face-Middle-Up-Front 2 // Orange
        2, -3.3, 0,               1, 0.5, 0, 0, 1, 0,   
        1.7, -3.3, 0,             1, 0.5, 0, 0, 1, 0,   
        1.7, -0.8, 0,             1, 0.5, 0, 0, 1, 0,   
        2, -0.8, 0,               1, 0.5, 0, 0, 1, 0,   
        // Face-Middle-Up-Back 2  // Orange
        3, -3.3, -1,              1, 0.5, 0, 0, 1, 0,    
        1.7, -3.3, -1,            1, 0.5, 0, 0, 1, 0,    
        1.7, -3, -1,              1, 0.5, 0, 0, 1, 0,    
        3, -3, -1,                1, 0.5, 0, 0, 1, 0,    
        // Face-Middle-Up-Right 2 // Green
        1.7, -3.3, -1,            0, 1, 0, 0, 1, 0,    
        1.7, -3.3, 0,             0, 1, 0, 0, 1, 0,    
        1.7, -0.8, 0,             0, 1, 0, 0, 1, 0,   
        1.7, -0.8, -1,            0, 1, 0, 0, 1, 0,    
        // Face-Right-Up 2        // White
        1, -1.2, -1,              1, 1, 1, 0, 1, 0,    
        1, -1.2, 0,               1, 1, 1, 0, 1, 0,    
        1, -1.2, 0,               1, 1, 1, 0, 1, 0,    
        1, -1.2, -1,              1, 1, 1, 0, 1, 0,    
        // Face-Right-Right 2     // Green
        2.5, -1.2, -1,            0, 1, 0, 0, 1, 0,    
        2.5, -1.2, 0,             0, 1, 0, 0, 1, 0,    
        2.5, 0.8, 0,              0, 1, 0, 0, 1, 0,    
        2.5, 0.8, -1,             0, 1, 0, 0, 1, 0,    
        // Face-Right-Down 2       // White
        1.8, 0.6, -1,             1, 1, 1, 0, 1, 0,    
        1.8, 0.6, 0,              1, 1, 1, 0, 1, 0,    
        2.8, 0.6, 0,              1, 1, 1, 0, 1, 0,    
        2.8, 0.6, -1,             1, 1, 1, 0, 1, 0,    
        // Face-Down-Right 2      // Green
        1.8, -1, -1,              0, 1, 0, 0, 1, 0,    
        1.8, -1, 0,               0, 1, 0, 0, 1, 0,    
        1.8, -1, 0,               0, 1, 0, 0, 1, 0,    
        1.8, -1, -1,              0, 1, 0, 0, 1, 0,    

     //Number 6
        // Face-Back- 6           // Blue             
        1.5, -3.3, -1,            0, 0, 1, 0, 1, 0,    
        1.2, -3.3, -1,            0, 0, 1, 0, 1, 0,    
        1.2, 1, -1,               0, 0, 1, 0, 1, 0,    
        1.5, 1, -1,               0, 0, 1, 0, 1, 0,    
        // Face-Up- 6             // Blue
        1.5, -3.3, -1,            0, 0, 1, 0, 1, 0,   
        1.2, -3.3, -1,            0, 0, 1, 0, 1, 0,    
        1.2, -3.3, -0,            0, 0, 1, 0, 1, 0,    
        1.5, -3.3, -0,            0, 0, 1, 0, 1, 0,    
        // Face-Up-Side 6         // Yellow
        1.5, -3.3, -1,            1, 1, 0, 0, 1, 0,    
        1.5, 1, -1,               1, 1, 0, 0, 1, 0,    
        1.5, 1, -0,               1, 1, 0, 0, 1, 0,    
        1.5, -3.3, -0,            1, 1, 0, 0, 1, 0,    
        // Face-Up-Side 6         // Yellow
        1.2, -3.3, -1,            1, 1, 0, 0, 1, 0,    
        1.2, 1, -1,               1, 1, 0, 0, 1, 0,   
        1.2, 1, -0,               1, 1, 0, 0, 1, 0,    
        1.2, -3.3, -0,            1, 1, 0, 0, 1, 0,  
        // Face-Up-Down 6         // Blue
        1.5, -3.3, -0,            0, 0, 1, 0, 1, 0,    
        1.2, -3.3, -0,            0, 0, 1, 0, 1, 0,    
        1.2, 1, -0,               0, 0, 1, 0, 1, 0,    
        1.5, 1, -0,               0, 0, 1, 0, 1, 0,    
        // Face-Front- 6          // White
        1.2, -1, 0,               1, 1, 1, 0, 1, 0, 
        0.1, -1, 0,               1, 1, 1, 0, 1, 0,  
        0.1, 1, 0,                1, 1, 1, 0, 1, 0,  
        1.2, 1, 0,                1, 1, 1, 0, 1, 0, 
        // Face-Front-Up-Side 6  // Blue
        1.5, -3.3, -0,            0, 0, 1, 0, 1, 0, 
        1.2, -3.3, -0,            0, 0, 1, 0, 1, 0,  
        1.2, 1, -0,               0, 0, 1, 0, 1, 0,  
        1.5, 1, -0,               0, 0, 1, 0, 1, 0, 
        // Face-Back-Up-Side 6    // Blue
        1.5, -3.3, -1,            0, 0, 1, 0, 1, 0,   
        1.2, -3.3, -1,            0, 0, 1, 0, 1, 0,   
        1.2, -1, -1,              0, 0, 1, 0, 1, 0,   
        1.5, -1, -1,              0, 0, 1, 0, 1, 0,   
        // Face-Left-Side 6       // White
        1.2, -1, -1,              1, 1, 1, 0, 1, 0,   
        0.1, -1, -1,              1, 1, 1, 0, 1, 0,   
        0.1, 1, -1,               1, 1, 1, 0, 1, 0,   
        1.2, 1, -1,               1, 1, 1, 0, 1, 0,   
        // Face-Right 6           // White
         0.1, -1, -1,             1, 1, 1, 0, 1, 0,   
         0.1, -1, -1,             1, 1, 1, 0, 1, 0,   
         0.1, 1, -1,              1, 1, 1, 0, 1, 0,
         0.1, 1, -0,              1, 1, 1, 0, 1, 0,
        // Face-Down 6            // Blue
        1.2, -1, -0,              0, 0, 1, 0, 1, 0,   
        1.5, -1, -0,              0, 0, 1, 0, 1, 0,   
        1.5, 1, -0,               0, 0, 1, 0, 1, 0,   
        1.2, 1, -0,               0, 0, 1, 0, 1, 0, 
        
    //Alphabet A 
        // Face-Back A            // Yellow
        -0.1, -3.3, -1,           1, 1, 0, 0, 1, 0,   
        -0.4, -3.3, -1,           1, 1, 0, 0, 1, 0,   
        -0.4, 1, -1,              1, 1, 0, 0, 1, 0,   
        -0.1, 1, -1,              1, 1, 0, 0, 1, 0,   
        // Face-Front- A          // Yellow 
        -0.1, -3.3, 0,            1, 1, 0, 0, 1, 0, 
        -0.4, -3.3, 0,            1, 1, 0, 0, 1, 0, 
        -0.4, 1, 0,               1, 1, 0, 0, 1, 0,
        -0.1, 1, 0,               1, 1, 0, 0, 1, 0,
        // Face-Right- A          // Blue
        -0.1, -3.3, -0,           0, 0, 1, 0, 1, 0,  
        -0.1, -3.3, -1,           0, 0, 1, 0, 1, 0,   
        -0.1, 1, -1,              0, 0, 1, 0, 1, 0,   
        -0.1, 1, -0,              0, 0, 1, 0, 1, 0,   
        // Face-Up A              // White 
        -0.1, -3.3, -1,           1, 1, 1, 0, 1, 0,   
        -0.4, -3.3, -1,           1, 1, 1, 0, 1, 0,   
        -0.4, -3.3, -0,           1, 1, 1, 0, 1, 0,   
        -0.1, -3.3, -0,           1, 1, 1, 0, 1, 0,   
        // Face-Left-Side A       // Blue
        -0.4, 1, -1,              0, 0, 1, 0, 1, 0,   
        -0.4, -3.3, -1,           0, 0, 1, 0, 1, 0,   
        -0.4, -3.3, -0,           0, 0, 1, 0, 1, 0,   
        -0.4, 1, -0,              0, 0, 1, 0, 1, 0,   
        // Face-Up A              // Yellow 
        -0.1, -3.3, -1,           1, 1, 0, 0, 1, 0,   
        -0.4, -3.3, -1,           1, 1, 0, 0, 1, 0,   
        -0.4, -3.3, -0,           1, 1, 0, 0, 1, 0,   
        -0.1, -3.3, -0,           1, 1, 0, 0, 1, 0,   
        // Face-Back A            // Yellow 
        -1.5, -3.3, -1,           1, 1, 0, 0, 1, 0,   
        -1.2, -3.3, -1,           1, 1, 0, 0, 1, 0,   
        -1.2, 1, -1,              1, 1, 0, 0, 1, 0,   
        -1.5, 1, -1,              1, 1, 0, 0, 1, 0,   
        // Face-Front- A          // Yellow
        -1.5, -3.3, 0,            1, 1, 0, 0, 1, 0, 
        -1.2, -3.3, 0,            1, 1, 0, 0, 1, 0, 
        -1.2, 1, 0,               1, 1, 0, 0, 1, 0, 
        -1.5, 1, 0,               1, 1, 0, 0, 1, 0, 
        // Face-Right- A          // Blue
        -1.2, -3.3, -0,           0, 0, 1, 0, 1, 0,   
        -1.2, -3.3, -1,           0, 0, 1, 0, 1, 0,   
        -1.2, 1, -1,              0, 0, 1, 0, 1, 0,   
        -1.2, 1, -0,              0, 0, 1, 0, 1, 0,  
        // Face-Up A              // White 
        -1.2, -3.3, -1,           1, 1, 1, 0, 1, 0,   
        -1.5, -3.3, -1,           1, 1, 1, 0, 1, 0,   
        -1.5, -3.3, -0,           1, 1, 1, 0, 1, 0,   
        -1.2, -3.3, -0,           1, 1, 1, 0, 1, 0,   
        // Face-Left-Side A       // Blue
        -1.5, 1, -1,              0, 0, 1, 0, 1, 0,     
        -1.5, -3.3, -1,           0, 0, 1, 0, 1, 0,  
        -1.5, -3.3, -0,           0, 0, 1, 0, 1, 0,  
        -1.5, 1, -0,              0, 0, 1, 0, 1, 0,  
        // Face-Up A              // Yellow 
        -0.1, -3.3, -1,           1, 1, 0, 0, 1, 0,  
        -0.4, -3.3, -1,           1, 1, 0, 0, 1, 0,  
        -0.4, -3.3, -0,           1, 1, 0, 0, 1, 0,  
        -0.1, -3.3, -0,           1, 1, 0, 0, 1, 0,  
        // Face-Up  A              // White 
        -1.2, -3.3, -1,           1, 1, 1, 0, 1, 0,  
        -0.1, -3.3, -1,           1, 1, 1, 0, 1, 0, 
        -0.1, -3.3, -0,           1, 1, 1, 0, 1, 0,  
        -1.2, -3.3, -0,           1, 1, 1, 0, 1, 0,  
        // Face-Up A              // White 
        -1.2, -3.2, -1,           1, 1, 1, 0, 1, 0,  
        -0.1, -3.2, -1,           1, 1, 1, 0, 1, 0,  
        -0.1, -3.2, -0,           1, 1, 1, 0, 1, 0,  
        -1.2, -3.2, -0,           1, 1, 1, 0, 1, 0,  
        // Face-Up A              // White 
        -1.2, -1.5, -1,           1, 1, 1, 0, 1, 0,  
        -0.1, -1.5, -1,           1, 1, 1, 0, 1, 0,  
        -0.1, -1.5, -0,           1, 1, 1, 0, 1, 0,  
        -1.2, -1.5, -0,           1, 1, 1, 0, 1, 0,  
        // Face-Up A              // White 
        -1.2, -1.4, -1,           1, 1, 1, 0, 1, 0,  
        -0.1, -1.4, -1,           1, 1, 1, 0, 1, 0,
        -0.1, -1.4, -0,           1, 1, 1, 0, 1, 0,  
        -1.2, -1.4, -0,           1, 1, 1, 0, 1, 0,  

       //Alphabet N
        // Face      N            // Green 
        -2.1, -3.3, -1,           0, 1, 0, 0, 1, 0,  
        -1.8, -3.3, -1,           0, 1, 0, 0, 1, 0,  
        -1.8, 1, -1,              0, 1, 0, 0, 1, 0,  
        -2.1, 1, -1,              0, 1, 0, 0, 1, 0, 
        // Face-Front- N          // Green 
        -2.1, -3.3, 0,            0, 1, 0, 0, 1, 0, 
        -1.8, -3.3, 0,            0, 1, 0, 0, 1, 0, 
        -1.8, 1, 0,               0, 1, 0, 0, 1, 0, 
        -2.1, 1, 0,               0, 1, 0, 0, 1, 0,
        // Face-Right- N          // Orange
        -1.8, -3.3, -0,           1, 0.5, 0, 0, 1, 0,   
        -1.8, -3.3, -1,           1, 0.5, 0, 0, 1, 0,   
        -1.8, 1, -1,              1, 0.5, 0, 0, 1, 0,   
        -1.8, 1, -0,              1, 0.5, 0, 0, 1, 0,   
        // Face-Left-Side N       // Orange
        -2.1, 1, -1,              1, 0.5, 0, 0, 1, 0,  
        -2.1, -3.3, -1,           1, 0.5, 0, 0, 1, 0,   
        -2.1, -3.3, -0,           1, 0.5, 0, 0, 1, 0,  
        -2.1, 1, -0,              1, 0.5, 0, 0, 1, 0,   
        // Face-Up N              // Green 
        -1.8, -3.3, -1,           0, 1, 0, 0, 1, 0,   
        -2.1, -3.3, -1,           0, 1, 0, 0, 1, 0,   
        -2.1, -3.3, -0,           0, 1, 0, 0, 1, 0,  
        -1.8, -3.3, -0,           0, 1, 0, 0, 1, 0,  
        // Face-Back N           // Green
        -3, -3.3, -1,             0, 1, 0, 0, 1, 0,   
        -2.7, -3.3, -1,           0, 1, 0, 0, 1, 0,   
        -2.7, 1, -1,              0, 1, 0, 0, 1, 0,   
        -3, 1, -1,                0, 1, 0, 0, 1, 0,   
        // Face-Front- N         // Green 
        -3, -3.3, 0,              0, 1, 0, 0, 1, 0, 
        -2.7, -3.3, 0,            0, 1, 0, 0, 1, 0,  
        -2.7, 1, 0,               0, 1, 0, 0, 1, 0,  
        -3, 1, 0,                 0, 1, 0, 0, 1, 0,  
        // Face-Right- N         // Orange
        -2.7, -3.3, -0,           1, 0.5, 0, 0, 1, 0,    
        -2.7, -3.3, -1,           1, 0.5, 0, 0, 1, 0,    
        -2.7, 1, -1,              1, 0.5, 0, 0, 1, 0,    
        -2.7, 1, -0,              1, 0.5, 0, 0, 1, 0,    
        // Face-Left-Side N      // Orange
        -3, 1, -1,                1, 0.5, 0, 0, 1, 0,   
        -3, -3.3, -1,             1, 0.5, 0, 0, 1, 0,    
        -3, -3.3, -0,             1, 0.5, 0, 0, 1, 0,    
        -3, 1, -0,                1, 0.5, 0, 0, 1, 0,   
        // Face-Up N             // Green 
        -2.7, -3.3, -1,           0, 1, 0, 0, 1, 0,    
        -3, -3.3, -1,             0, 1, 0, 0, 1, 0,   
        -3, -3.3, -0,             0, 1, 0, 0, 1, 0,    
        -2.7, -3.3, -0,           0, 1, 0, 0, 1, 0,    
        // Face-Middel-line N     // White 
        -2.7, -3.3, -1,           1, 1, 1, 0, 1, 0,   
        -2, -1.5, -1,             1, 1, 1, 0, 1, 0,   
        -2, -1.5, -0,             1, 1, 1, 0, 1, 0,   
        -2.7, -3.3, -0,           1, 1, 1, 0, 1, 0,   
        // Face-Middel-line N    // White 
        -2.7, -3, -1,             1, 1, 1, 0, 1, 0,   
        -2, -1, -1,               1, 1, 1, 0, 1, 0,   
        -2, -1, -0,               1, 1, 1, 0, 1, 0,   
        -2.7, -3, -0,             1, 1, 1, 0, 1, 0,   //Index: 278

         //Cube
         -0.5, -0.5, -0.5,     1, 1, 1,    0, 0, -1,       
         0.5, -0.5, -0.5,     1, 1, 1,    0, 0, -1,   
         0.5,  0.5, -0.5,     1, 1, 1,    0, 0, -1,   
        -0.5,  0.5, -0.5,     1, 1, 1,    0, 0, -1,   
             
        -0.5, -0.5,  0.5,     1, 1, 1,    0, 0, 1,    
         0.5, -0.5,  0.5,     1, 1, 1,    0, 0, 1,    
         0.5,  0.5,  0.5,     1, 1, 1,    0, 0, 1,    
        -0.5,  0.5,  0.5,     1, 1, 1,    0, 0, 1,    

        -0.5, -0.5, -0.5,     1, 1, 1,    -1, 0, 0,   
        -0.5,  0.5, -0.5,     1, 1, 1,    -1, 0, 0,   
        -0.5,  0.5,  0.5,     1, 1, 1,    -1, 0, 0,   
        -0.5, -0.5,  0.5,     1, 1, 1,    -1, 0, 0,   
               
         0.5, -0.5, -0.5,     1, 1, 1,    1, 0, 0,    
         0.5,  0.5, -0.5,     1, 1, 1,    1, 0, 0,    
         0.5,  0.5,  0.5,     1, 1, 1,    1, 0, 0,    
         0.5, -0.5,  0.5,     1, 1, 1,    1, 0, 0,    
             
        -0.5, -0.5, -0.5,     1, 1, 1,    0, -1, 0,   
        -0.5, -0.5,  0.5,     1, 1, 1,    0, -1, 0,   
         0.5, -0.5,  0.5,     1, 1, 1,    0, -1, 0,   
         0.5, -0.5, -0.5,     1, 1, 1,    0, -1, 0,   
              
        -0.5,  0.5, -0.5,     1, 1, 1,    0, 1, 0,    
        -0.5,  0.5,  0.5,     1, 1, 1,    0, 1, 0,    
         0.5,  0.5,  0.5,     1, 1, 1,    0, 1, 0,    
         0.5,  0.5, -0.5,     1, 1, 1,    0, 1, 0     
    ];


    var indices = [
        0, 1, 2, 0, 2, 3,                // Face 1
        4, 5, 6, 4, 6, 7,                // Face 2
        8, 9, 10, 8, 10, 11,             // Face 3
        12, 13, 14, 12, 14, 15,          // Face 4
        16, 17, 18, 16, 18, 19,          // Face 5
        20, 21, 22, 20, 22, 23,          // Face 6    
        24, 25, 26, 24, 26, 27,          // Face 7
        28, 29, 30, 28, 30, 31,          // Face 8
        32, 33, 34, 32, 34, 35,          // Face 9
        36, 37, 38, 36, 38, 39,          // Face 10
        40, 41, 42, 40, 42, 43,          // Face 11
        44, 45, 46, 44, 46, 47,          // Face 12
        48, 49, 50, 48, 50, 51,          // Face 13
        52, 53, 54, 52, 54, 55,          // Face 14
        56, 57, 58, 56, 58, 59,          // Face 15
        60, 61, 62, 60, 62, 63,          // Face 16
        64, 65, 66, 64, 66, 67,          // Face 17
        68, 69, 70, 68, 70, 71,          // Face 18
        72, 73, 74, 72, 74, 75,          // Face 19
        76, 77, 78, 76, 78, 79,          // Face 20
        80, 81, 82, 80, 82, 83,          // Face 21
        84, 85, 86, 84, 86, 87,          // Face 22
        88, 89, 90, 88, 90, 91,          // Face 23
        92, 93, 94, 92, 94, 95,          // Face 24
        96, 97, 98, 96, 98, 99,          // Face 25
        100, 101, 102, 100, 102, 103,    // Face 26
        104, 105, 106, 104, 106, 107,    // Face 27    
        108, 109, 110, 108, 110, 111,    // Face 28
        112, 113, 114, 112, 114, 115,    // Face 29
        116, 117, 118, 116, 118, 119,    // Face 30
        120, 121, 122, 120, 122, 123,    // Face 31
        124, 125, 126, 124, 126, 127,    // Face 32
        128, 129, 130, 128, 130, 131,    // Face 33
        132, 133, 134, 132, 134, 135,    // Face 34
        136, 137, 138, 136, 138, 139,    // Face 35
        140, 141, 142, 140, 142, 143,    // Face 36
        144, 145, 146, 144, 146, 147,    // Face 37
        148, 149, 150, 148, 150, 151,    // Face 38
        152, 153, 154, 152, 154, 155,    // Face 39
        156, 157, 158, 156, 158, 159,    // Face 40
        160, 161, 162, 160, 162, 163,    // Face 41
        164, 165, 166, 164, 166, 167,    // Face 42
        168, 169, 170, 168, 170, 171,    // Face 43
        172, 173, 174, 172, 174, 175,    // Face 44
        176, 177, 178, 176, 178, 179,    // Face 45
        180, 181, 182, 180, 182, 183,    // Face 46
        184, 185, 186, 184, 186, 187,    // Face 47
        188, 189, 190, 188, 190, 191,    // Face 48
        192, 193, 194, 192, 194, 195,    // Face 49
        196, 197, 198, 196, 198, 199,    // Face 50
        200, 201, 202, 200, 202, 203,    // Face 51
        204, 205, 206, 204, 206, 207,    // Face 52
        208, 209, 210, 208, 210, 211,    // Face 53
        212, 213, 214, 212, 214, 215,    // Face 54
        216, 217, 218, 216, 218, 219,    // Face 55
        220, 221, 222, 220, 222, 223,    // Face 56
        224, 225, 226, 224, 226, 227,    // Face 57
        228, 229, 230, 228, 230, 231,    // Face 58
        232, 233, 234, 232, 234, 235,    // Face 59
        236, 237, 238, 236, 238, 239,    // Face 60
        240, 241, 242, 240, 242, 243,    // Face 61
        244, 245, 246, 244, 246, 247,    // Face 62
        248, 249, 250, 248, 249, 251,    // Face 63
        252, 253, 254, 252, 254, 255,    // Face 64
        256, 257, 258, 256, 258, 259,    // Face 65
        260, 261, 262, 260, 262, 263,    // Face 66
        264, 265, 266, 264, 266, 267,    // Face 67
        268, 269, 270, 268, 270, 271,    // Face 68
        272, 273, 274, 272, 274, 275,    // Face 69
        276, 277, 278, 276, 278, 279,    // Face 70
        280, 281, 282, 280, 282, 283,    // Face 71
        284, 285, 286, 284, 286, 287,
        288, 289, 290, 288, 290, 291,
        292, 293, 294, 292, 294, 295,
        296, 297, 298, 296, 298, 299,
        300, 301, 302, 300, 302, 303,
        304, 305, 306, 304, 306, 307,
        308, 309, 310, 308, 310, 311,
        312, 313, 314, 312, 314, 315,
        316, 317, 318, 316, 318, 319,
        320, 321, 322, 320, 322, 323,
        324, 325, 326, 324, 326, 327,
        328, 329, 330, 328, 330, 331,
        332, 333, 334, 332, 334, 335,
        336, 337, 338, 336, 338, 339,
        340, 341, 342, 340, 342, 343,
        344, 345, 346, 344, 346, 347,
        348, 349, 350, 348, 350, 351,
        352, 353, 354, 352, 354, 355,
        356, 357, 358, 356, 358, 359,
        360, 361, 362, 360, 362, 363,
        364, 365, 366, 364, 366, 367,
        368, 369, 370, 368, 370, 371,
        372, 373, 374, 372, 374, 377,
        378, 379, 380, 378, 380, 381,
    
    ];

   // Create a linked-list for storing the vertices data in the GPU realm
   var buffer = gl.createBuffer();
   gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
   gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
   var indexBuffer = gl.createBuffer();
   gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
   gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

   // VERTEX SHADER
   var vertexShaderCode = `
       attribute vec3 aPosition;
       attribute vec3 aColor;
       attribute vec3 aNormal;
       uniform mat4 uModel;
       uniform mat4 uView;
       uniform mat4 uProjection;
       varying vec3 vPosition;
       varying vec3 vColor;
       varying vec3 vNormal;
       void main () {
           vec4 position = vec4(aPosition, 1.0);
           gl_Position = uProjection * uView * uModel * position;
           // gl_Position is the final destination for storing
           //  positional data for the rendered vertex
           vColor = aColor;
           vNormal = aNormal;
           vPosition = (uModel * position).xyz;
       }
   `;
   var vertexShader = gl.createShader(gl.VERTEX_SHADER);
   gl.shaderSource(vertexShader, vertexShaderCode);
   gl.compileShader(vertexShader);

   // FRAGMENT SHADER
   var fragmentShaderCode = `
       precision mediump float;
       varying vec3 vColor;
       uniform vec3 uLightConstant;      // It represents the light color
       uniform float uAmbientIntensity;  // It represents the light intensity
       varying vec3 vPosition;
       varying vec3 vNormal;
       uniform vec3 uLightPosition;
       uniform vec3 uViewerPosition;
       uniform mat3 uNormalModel;
       void main() {
           vec3 ambient = uLightConstant * uAmbientIntensity;
           vec3 lightDirection = uLightPosition - vPosition;
           vec3 normalizedLight = normalize(lightDirection);
           vec3 normalizedNormal = normalize(uNormalModel * vNormal);
           float cosTheta = dot(normalizedNormal, normalizedLight);
           vec3 diffuse = vec3(0.0, 0.0, 0.0);
           if (cosTheta > 0.0) {
               float diffuseIntensity = cosTheta;
               diffuse = uLightConstant * diffuseIntensity;
           }
           vec3 normalizedReflector = normalize(reflect(-lightDirection, normalizedNormal));
           vec3 normalizedViewer = normalize(uViewerPosition - vPosition);
           float cosPhi = dot(normalizedReflector, normalizedViewer);
           vec3 specular = vec3(0., 0., 0.);
           if (cosPhi > 0.) {
               float shininessConstant = 100.0;    // bare minimum spec for metal
               float specularIntensity = pow(cosPhi, shininessConstant);
               specular = uLightConstant * specularIntensity;
           }
           vec3 phong = ambient + diffuse + specular;
           gl_FragColor = vec4(phong * vColor, 1.0);
           // gl_FragColor is the final destination for storing
           //  color data for the rendered fragment
       }
   `;
   var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
   gl.shaderSource(fragmentShader, fragmentShaderCode);
   gl.compileShader(fragmentShader);

   // Comparing to C-Programming, we may imagine
   //  that up to this step we have created two
   //  object files (.o), for the vertex and fragment shaders

   var shaderProgram = gl.createProgram();
   gl.attachShader(shaderProgram, vertexShader);
   gl.attachShader(shaderProgram, fragmentShader);
   gl.linkProgram(shaderProgram);
   gl.useProgram(shaderProgram);

   // Local variables
   var isAnimated = false;
   var theta = 0.0;
   var direction = "";
   var dX = 0.0;
   var dY = 0.0;
   // For the model (all linear transformation)
   var uModel = gl.getUniformLocation(shaderProgram, "uModel");

   // For the camera
   var camera = [0.0, 0.0, 7.5]; //7.5 unit from the origin outwards the screen
   var uView = gl.getUniformLocation(shaderProgram, "uView");
   var view = glMatrix.mat4.create();  // Create an identity matrix
   glMatrix.mat4.lookAt(
       view,
       camera,
       [camera[0], 0.0, -10.0],
       [0.0, 1.0, 0.0]
   );
   gl.uniformMatrix4fv(uView, false, view);

   // For the projection
   var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");
   var perspective = glMatrix.mat4.create();
   glMatrix.mat4.perspective(
       perspective,
       ((Math.PI / 2) - 15),  // 75 degrees 
       1.0,
       0.5,
       50.0
   );
   gl.uniformMatrix4fv(uProjection, false, perspective);

   // For the lighting and shading
   var uLightConstant = gl.getUniformLocation(shaderProgram, "uLightConstant");
   // Ambient
   var uAmbientIntensity = gl.getUniformLocation(shaderProgram, "uAmbientIntensity");
   gl.uniform3fv(uLightConstant, [1.0, 1.0, 1.0]);   // white color
   gl.uniform1f(uAmbientIntensity, 0.441);             // 44.1% intensity
   
   // Diffuse
   var uLightPosition = gl.getUniformLocation(shaderProgram, "uLightPosition");
   gl.uniform3fv(uLightPosition, [0.5, 0.5, 1.5]);
   var uNormalModel = gl.getUniformLocation(shaderProgram, "uNormalModel");
   // Specular
   var uViewerPosition = gl.getUniformLocation(shaderProgram, "uViewerPosition");

   // Local functions
   // MOUSE
   var dragging, prevx, prevy, rotation = glMatrix.mat4.create();
   function onMouseDown(event) {
       var x = event.clientX;
       var y = event.clientY;
       var rect = event.target.getBoundingClientRect();
       if (
           rect.left <= x &&
           rect.right >= x &&
           rect.top <= y &&
           rect.bottom >= y
       ) {
           dragging = true;
           prevx = x;
           prevy = y;
       }
   }
   function onMouseUp(event) {
       dragging = false;
   }
   function onMouseMove(event) {
       if (dragging) {
           var x = event.clientX;
           var y = event.clientY;
           var xdiff = x - prevx;
           var ydiff = y - prevy;
           var inverseRotation = glMatrix.mat4.create();
           glMatrix.mat4.invert(inverseRotation, rotation);
           var xAxis = [1, 0, 0, 0];
           var yAxis = [0, 1, 0, 0];
           glMatrix.vec4.transformMat4(xAxis, xAxis, inverseRotation);
           glMatrix.vec4.transformMat4(yAxis, yAxis, inverseRotation);
           glMatrix.mat4.rotate(rotation, rotation, glMatrix.glMatrix.toRadian(xdiff), yAxis);
           glMatrix.mat4.rotate(rotation, rotation, glMatrix.glMatrix.toRadian(ydiff), xAxis);
           prevx = x;
           prevy = y;
       }
   }
   document.addEventListener("mousedown", onMouseDown);
   document.addEventListener("mouseup", onMouseUp);
   document.addEventListener("mousemove", onMouseMove);

   // KEYBOARD or even for changing the camera location
   function onKeyDown(event) {
       switch (event.keyCode) {
           case 73: // Object UP
               direction = "up";
               break;
           case 75: // Object DOWN
               direction = "down";
               break;
           case 68: // Object RIGHT
               direction = "right";
               break;
           case 65: // Object LEFT
               direction = "left";
               break;
           case 38: // Camera UP
               camera[1] += 0.05;
               gl.uniform3fv(uViewerPosition, camera);
               glMatrix.mat4.lookAt(
                   view,
                   camera,
                   [camera[0], 0.0, -10.0],
                   [0.0, 1.0, 0.0]
               );
               gl.uniformMatrix4fv(uView, false, view);
               break;
           case 40: // Camera DOWN
               camera[1] -= 0.05;
               gl.uniform3fv(uViewerPosition, camera);
               glMatrix.mat4.lookAt(
                   view,
                   camera,
                   [camera[0], 0.0, -10.0],
                   [0.0, 1.0, 0.0]
               );
               gl.uniformMatrix4fv(uView, false, view);
               break;
           case 76: // Camera RIGHT
               camera[0] += 0.05;
               gl.uniform3fv(uViewerPosition, camera);
               glMatrix.mat4.lookAt(
                   view,
                   camera,
                   [camera[0], 0.0, -10.0],
                   [0.0, 1.0, 0.0]
               );
               gl.uniformMatrix4fv(uView, false, view);
               break;
           case 74: // Camera LEFT
               camera[0] -= 0.05;
               gl.uniform3fv(uViewerPosition, camera);
               glMatrix.mat4.lookAt(
                   view,
                   camera,
                   [camera[0], 0.0, -10.0],
                   [0.0, 1.0, 0.0]
               );
               gl.uniformMatrix4fv(uView, false, view);
               break;
           default:
               break;
       }
   }
   function onKeyUp(event) {
       direction = "";
   }
   function onKeyPress(event) {
       console.log('keypress');
       if (event.keyCode == 32) {  // Space button
           isAnimated = !isAnimated;
       }
   }
   document.addEventListener("keypress", onKeyPress)
   document.addEventListener("keydown", onKeyDown);
   document.addEventListener("keyup", onKeyUp);

   // Teach the GPU how to collect
   //  the positional values from ARRAY_BUFFER
   //  for each vertex being processed
   var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
   gl.vertexAttribPointer(
       aPosition,
       3,
       gl.FLOAT,
       false,
       9 * Float32Array.BYTES_PER_ELEMENT,
       0);
   gl.enableVertexAttribArray(aPosition);
   var aColor = gl.getAttribLocation(shaderProgram, "aColor");
   gl.vertexAttribPointer(
       aColor,
       3,
       gl.FLOAT,
       false,
       9 * Float32Array.BYTES_PER_ELEMENT,
       3 * Float32Array.BYTES_PER_ELEMENT);
   gl.enableVertexAttribArray(aColor);
   var aNormal = gl.getAttribLocation(shaderProgram, "aNormal");
   gl.vertexAttribPointer(
       aNormal,
       3,
       gl.FLOAT,
       false,
       9 * Float32Array.BYTES_PER_ELEMENT,
       6 * Float32Array.BYTES_PER_ELEMENT);
   gl.enableVertexAttribArray(aNormal);

   function render() {
       gl.enable(gl.DEPTH_TEST);
       gl.clearColor(0.3, 0.6, 0.5, 1.0);
       gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
       var model = glMatrix.mat4.create();
       if (isAnimated) {
           theta += 0.01;
       }
       switch (direction) {
           case "up":
               dY += 0.1;
               break;
           case "down":
               dY -= 0.1;
               break;
           case "left":
               dX -= 0.1;
               break;
           case "right":
               dX += 0.1;
               break;

           default:
               break;
       }
       glMatrix.mat4.translate(model, model, [dX, dY, 0.0]);
       glMatrix.mat4.rotateZ(rotation, rotation, theta);
       glMatrix.mat4.rotateY(rotation, rotation, theta);
       glMatrix.mat4.multiply(model, model, rotation);
       gl.uniformMatrix4fv(uModel, false, model);

       // For transforming the normal vector
       var normalModel = glMatrix.mat3.create();
       glMatrix.mat3.normalFromMat4(normalModel, model);
       gl.uniformMatrix3fv(uNormalModel, false, normalModel);

       gl.drawElements(gl.TRIANGLES, indices.length,
           gl.UNSIGNED_SHORT, 0);
       requestAnimationFrame(render);
   }
   requestAnimationFrame(render);
}