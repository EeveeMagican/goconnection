// Create a YUI sandbox on your page.
YUI().use('node', 'event', function (Y){
    // The Node and Event modules are loaded and ready to use.
    // Your code goes here!
    
    Y.one("#helloDiv").setHTML('Goodbye!');
    
    var b_canvas = Y.one("#myCanvas").getDOMNode();
    var b_context = b_canvas.getContext("2d");
    b_context.fillRect(50, 25, 150, 100);
    b_context.fillStyle = '#fff';
    b_context.fillText("Hello World!",100,50);
});