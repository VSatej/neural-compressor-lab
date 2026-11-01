
cmake_minimum_required(VERSION 3.16)
project(NeuralCompressorLab LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

add_executable(cpp compressor.cpp
        practise/prime.cpp
        practise/pract1.cpp
        practise/pract1.h)
