/*
    Working with Basic Canvas
    Author: Full Sail JavaScript Development Team
    PWA-1
*/

console.log("start canvas");

(function(){

/******************************************************************************
    BASIC Canvas
        - Define an area on the Canvas (the one defined in the index.html)
        - Write formatted text to the Canvas
    ---------------------------------------------------------------------
*/

    //1. get the <canvas> element

    //2. call the getContext('2d') built in HTML5 object (many properties and
    //          methods for drawing paths, boxes, circles, images, etc...

    //3. set text attributes

    //4. write text to the <canvas>


//*****************************************************************************


/******************************************************************************
    Dynamically define a Canvas
    -------------------------------------------------------------------*/
        //1. create a Canvas dynamically

        //2. adds the canvas to the DOM

        //3. call the getContext('2d') built in HTML5 object (many properties and
        //          methods for drawing paths, boxes, circles, images, etc...

        //4. set canvas boarder size

    //-------------------------------------------------------------------

        /*****************************************
         STUDENT ACTIVITY 1:
         - Create and display "Hello World"

         1.  Use the Canvas created above.
         2.  Create text and display "Hello World".
         3.  The text should be 25px, Georgia (font).
         4.  Place the text below the header created above.
         -------------------------------------*/



    /* ================================================
        Draw "Lines" on the Canvas

        - To draw a line using HTML5 Canvas, we use the beginPath(), moveTo(),
        lineTo(), and stroke() methods.

        1. First, we the beginPath() method to declare that we are about to draw a
            new path.
        2. Next, we use the moveTo() method to position the context point
            (i.e. drawing cursor).
        3. Then we use the lineTo() method to draw a straight line from the starting
            position to a new position.
        4. Finally, to make the line visible, we can apply a stroke to the line using
            stroke().  The stroke color is defaulted to black.
    -------------------------------------------------------------------*/


        //1. Declare that we are about to draw a new path or resets a current path

        //2. Style the stroke color (red) and stroke size

        //3. Defines the starting and ending point of a line

        //4. Renders (draws) the line to the canvas


        /*****************************************
            STUDENT ACTIVITY 2:
                - Draw a rectangle using the example above

            1.  Using the code above, draw a rectangle.
            2.  Do the above with only 3 lines of code.
        -------------------------------------*/



    /* ================================================
        Draw a "Rectangle" and fill it with a color on the Canvas

        -  To create a rectangle using HTML5 Canvas, we use the rect() method
            rather than constructing the shape with 4 connecting lines (as we
            performed in the STUDENT ACTIVITY above).

        -  An HTML5 Canvas rectangle is positioned with x and y parameters, and is
            sized with width and height parameters.  The rectangle is positioned
            about its top left corner.
    --------------------------------------------------------------------*/

            //1. Declare that we are about to draw a new path or resets a current path

            //2. Define the fill color

            //3. Defines the rectangle at x-175, y-50 with a width and height of 50
            //      x 200

            //4.  Renders the fill - the fill was defined in 2

            //5. 2. Style the stroke color (black) and stroke size

            //6. Renders (draws) the line to the canvas


        /*****************************************
            STUDENT ACTIVITY 3:
            - Create a "Red Cross"

            1.  Use the rectangle above.
            2.  Create another rectangle that when it is drawn, creates a "Red Cross".
            3.  Do the above with only 3 lines of code.
        -------------------------------------*/


    /* ================================================
         Draw a "Circle" and fill it with color on the Canvas

         -  To draw a circle with HTML5 Canvas, we create a full arc using the
                arc() method by defining the starting angle as 0 and the ending angle
                as 2 * PI.

            PI = Pi is a name given to the ratio of the circumference of a circle to the
                diameter. That means, for any circle, you can divide the circumference
                (the distance around the circle) by the diameter and always get exactly
                the same number.

        - To create an arc with HTML5 Canvas, we can use the arc() method. Arcs
            are defined by a center point, a radius, a starting angle, an ending angle,
            and the drawing direction (either clockwise or anticlockwise).  Arcs can be
            styled with the lineWidth, strokeStyle, and lineCap properties.

        Syntax:
            *  context.arc(x,y,r,sAngle,eAngle,direction);

                - x, y is the starting point the center of the circle
                - r is the radius of the circle (from the center to the edge of the circle
                - sAngle is the starting angle
                - eAngle is the ending angle (.5 would be 1/2 of the circle)
                - direction is the direction of the draw (optional)
    -------------------------------------------------------------------*/

            //1. Declare that we are about to draw a new path or resets a current path

            //2. Define the fill style in RGB

            //3. Style the stroke color (black) and stroke size

            //4. Defines the arc at x= 300, y= 100(center point), and the radius
            //      of 40 staring angle and ending angle.
            //  The arc is nothing more than a section of the circumference of an
            //      imaginary circle.

            //5. Renders (draws) the line to the canvas

            //6. Fill the Circle with what is defined in 2.


        /*****************************************
             STUDENT ACTIVITY 4:
             - Position the circle (AKA "the ball"), right below the "Red Cross"

             1.  Use the "the ball" created above.
             2.  Re-position it so it is directly below the "Red Cross"
        -------------------------------------*/


    /* ================================================
        Draw a "Triangle" and fill it with color on the Canvas

        - There are no methods to auto draw a Triangle, this is done manually by
                drawing lines
        -----------------------------------------------------------------*/

        /*****************************************
             STUDENT ACTIVITY 5:
                - Draw a Triangle using 3 lines drawn on the Canvas, then fill with color.

                1.  Declare the new path.
                2.  Style so the line is 3px and the color is orange.
                3.  Set a starting point.
                4.  Draw the 3 lines.
                5.  Fill the Triangle with color.

        -------------------------------------*/

            //1. Declare that we are about to draw a new path or resets a current path

            //2. Style the stroke color (orange) and stroke size to 3px

            //3. Define the starting point of line 1

            //4. Define the end point of line 1

            //5. Define the end point of line 2

            //6. Define the end point of line 3. back to where we started

            //7. Render the triangle

            //8. Fill the Triangle


    /*==================================================
        Creates and Draws an image

            - To draw an image using HTML5 Canvas, we can use the drawImage()
                method which requires an image object and a destination point.
            - The destination point defines the top left corner of the image relative to
                the top left corner of the canvas.

            - Since the drawImage() method requires an image object, we must first
                create an image and wait for it to load before instantiating drawImage().
                We can accomplish this by using the onload property of the image object.

        Syntax: drawImage()
            - Position the image on the canvas:
                *   context.drawImage(img,x,y);

            - Position the image on the canvas, and specify width and height of the
                image:
                *   context.drawImage(img,x,y,width,height);

        URL for demo:
        "http://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=www.fullsail.com&chld=H|0";
        -------------------------------------------------------------------*/

          //1. create new image container

            //2. url for the the QR image

            //3. create an image and wait for it to load before instantiating drawImage().


   /*================================================
        Erase the Canvas
   --------------------------------------------------------------------*/


   /*================================================
        Draw 500 random colored lines
   --------------------------------------------------------------------*/

       /*****************************************
            STUDENT ACTIVITY 6:
            - Draw 500 random colored lines

            1.  Use all the items you have learned up to this point to draw the 500
                colored lines.
       -------------------------------------*/


})();