using System;
using System.Collections.Generic;

List<string> names = new List<string> {  "Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China" };

Console.WriteLine("All Pace Names");
foreach ( name of names)
{
  Console.WriteLine($"Hello {name}!");
}
