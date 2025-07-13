
import { Code, Music, User, GraduationCap, Trophy, Calendar, Award, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { LampDemo } from "@/components/LampDemo";
import { TubelightNavbarDemo } from "@/components/ui/tubelight-navbar";
import { Footer } from "@/components/Footer";
import { Piano } from "@/components/ui/piano";
import { AuroraBackground } from "@/components/ui/aurora-background";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      {/* Navigation */}
      <TubelightNavbarDemo />

      {/* Hero Section with Aurora and Lamp */}
      <section id="home" className="relative">
        <AuroraBackground className="min-h-screen">
          <LampDemo />
        </AuroraBackground>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-8 font-display">
              About Me
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed font-light">
              I'm currently pursuing a Bachelor's degree in Computer Science at Arizona State University (Expected Dec 2026) 
              with a 4.00 GPA and Dean's List recognition. I'm actively seeking my first internship opportunity. 
              My programming foundation includes Java and C++, and I'm passionate about 
              expanding my skills in software development. Beyond coding, I'm working on creating my first music album, 
              blending my technical mindset with creative expression.
            </p>
          </div>

          {/* Education and Skills Cards */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Education Card */}
              <Card className="glow-border-hover bg-white border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-50"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center mb-6">
                    <GraduationCap className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900 font-display">Education</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800">Arizona State University</h4>
                      <p className="text-gray-600">Bachelor of Science - Computer Science</p>
                      <p className="text-gray-600">Expected December 2026</p>
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex items-center mb-2">
                        <Award className="h-5 w-5 text-blue-600 mr-2" />
                        <span className="font-semibold text-gray-800">4.00 GPA</span>
                      </div>
                      <div className="flex items-center">
                        <Trophy className="h-5 w-5 text-blue-600 mr-2" />
                        <span className="text-gray-700">Dean's List 2023-2024</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Skills Card */}
              <Card className="glow-border-hover bg-white border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-bl from-blue-50 to-white opacity-50"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center mb-6">
                    <Code className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900 font-display">Technical Skills</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Programming Languages</h4>
                      <p className="text-gray-700">Java, C++, C, Python, HTML, CSS, JavaScript, SQL, Bash</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Tools & Technologies</h4>
                      <p className="text-gray-700">GitHub, VS Code, Linux/WSL, Blender, Excel, Unity</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Projects Timeline */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center font-display">Project Timeline</h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-700 rounded-full shadow-lg shadow-blue-500/30"></div>
              
              {/* Timeline Items */}
              <div className="space-y-16">
                {/* Unity 3D Platformer - First Project (2021) */}
                <div className="relative flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <Card className="glow-border-hover bg-white border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-50"></div>
                      <CardContent className="p-6 relative z-10">
                        <div className="flex items-center justify-end mb-3">
                          <Calendar className="h-6 w-6 text-blue-600 mr-2" />
                          <h4 className="text-xl font-semibold text-gray-900">Unity 3D Platformer</h4>
                        </div>
                        <p className="text-gray-700 mb-2">
                          Developed a 3D platformer game using Unity and C#. Featured custom Blender assets, 
                          soundtrack, and advanced game mechanics including player movement and collision detection.
                        </p>
                        <div className="text-sm text-blue-600 font-medium">
                          Technologies: Unity, C#, Blender, Audio Production
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10">
                    <Calendar className="h-5 w-5 text-white" />
                  </div>
                  <div className="w-1/2 pl-8">
                    <div className="text-sm text-gray-500 font-medium">2021</div>
                  </div>
                </div>

                {/* Autonomous Vehicle Simulation - Second Project (2023) */}
                <div className="relative flex items-center">
                  <div className="w-1/2 pr-8">
                    <div className="text-sm text-gray-500 font-medium text-right">2023</div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10">
                    <Trophy className="h-5 w-5 text-white" />
                  </div>
                  <div className="w-1/2 pl-8">
                    <Card className="glow-border-hover bg-white border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-bl from-blue-50 to-white opacity-50"></div>
                      <CardContent className="p-6 relative z-10">
                        <div className="flex items-center mb-3">
                          <Trophy className="h-6 w-6 text-blue-600 mr-2" />
                          <h4 className="text-xl font-semibold text-gray-900">Autonomous Vehicle Simulation</h4>
                        </div>
                        <p className="text-gray-700 mb-2">
                          Created an intelligent path-finding system for autonomous navigation through a complex maze environment. 
                          Implemented pressure, lidar, and color sensing for 
                          optimal route planning and obstacle avoidance.
                        </p>
                        <div className="text-sm text-blue-600 font-medium">
                          Technologies: MATLAB, Pathfinding Algorithms, Simulation
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Shortest Path Calculator - Most Recent Project (2024) */}
                <div className="relative flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <Card className="glow-border-hover bg-white border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-50"></div>
                      <CardContent className="p-6 relative z-10">
                        <div className="flex items-center justify-end mb-3">
                          <Code className="h-6 w-6 text-blue-600 mr-2" />
                          <h4 className="text-xl font-semibold text-gray-900">Shortest Path Calculator</h4>
                        </div>
                        <p className="text-gray-700 mb-2">
                          Implemented Dijkstra's algorithm in C++ to solve shortest path problems in weighted and unweighted graphs. 
                          Features efficient data structures, comprehensive error handling, and optimized performance 
                          for large-scale graph traversal operations.
                        </p>
                        <div className="text-sm text-blue-600 font-medium">
                          Technologies: C++, Algorithms, Linked Lists, Heaps
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10">
                    <Code className="h-5 w-5 text-white" />
                  </div>
                  <div className="w-1/2 pl-8">
                    <div className="text-sm text-gray-500 font-medium">2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Music Section with Piano */}
      <section id="music" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-8 font-display">
              Music & Creative Projects
            </h2>
            <p className="text-xl text-gray-700 mb-12 leading-relaxed font-light">
              Exploring creativity through music while developing my technical skills. Currently working on my first album, 
              blending analytical thinking with artistic expression.
            </p>
          </div>
          
          {/* Piano Component */}
          <div className="max-w-4xl mx-auto mb-16">
            <Piano />
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="glow-border-hover bg-white border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-50"></div>
              <CardContent className="p-8 text-center relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-xl">
                  <Music className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">
                  Album in Progress
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Currently working on my first music album, experimenting with different sounds and learning about 
                  music production. This creative journey helps me think outside the box and brings a unique perspective 
                  to my technical work. Music and programming both require logical thinking, attention to detail, 
                  and creative problem-solving.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
