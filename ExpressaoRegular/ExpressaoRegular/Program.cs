using System;
using System.Text.RegularExpressions;

namespace ExpressaoRegular
{
    class Program
    {
        static void Main(string[] args)
        {
            var texto1 = "1,2,3,4,5,6,a.b c!d?e";
            var texto2 = "lista de arquivos mp3: jazz.mp3, rock.mp3, podcast.mp3, blues.mp3";

            Regex rx1 = new Regex(@"(?i)A.B");
            MatchCollection match1 = rx1.Matches(texto1);
            Console.WriteLine($"{Regex.Match(texto1, "(?i)A.B").Value} " +
                $"-- {match1.Count} " +
                $"-- {texto2}");


            Regex rx2 = new Regex(@"\.mp3");
            MatchCollection match2 = rx2.Matches(texto2);
            Console.WriteLine($"{Regex.Match(texto2, @"\.mp3\G").Value} " +
                $"-- {match2.Count} " +
                $"-- {texto2}");


            Console.ReadLine();
        }
    }
}
