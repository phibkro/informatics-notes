# THE INSTRUCTION SET ARCHITECTURE LEVEL
## Introduction
This chapter delves into the Instruction Set Architecture (ISA) level, which occupies a crucial position between the microarchitecture level and the operating system level. 
Historically, it was the first level to be developed and, in some contexts, is still referred to as 'the architecture' or, erroneously, as 'assembly language.'

### Importance of the ISA Level
The ISA level is of special significance to system architects as it serves as the vital interface between software and hardware. 
While one might consider having hardware execute high-level language programs directly, this approach would sacrifice the performance gains achieved through compilation. 
Additionally, for practical utility, computers must be capable of running programs in multiple languages, not just one.

The conventional approach adopted by system designers is to translate programs written in various high-level languages into a common intermediate form, which is the ISA level. Subsequently, hardware is designed to execute programs at the ISA level directly. In essence, the ISA level defines the interface between compilers and hardware, acting as the language they both must comprehend.

## The ISA Design Process
When designing a new machine, architects should ideally engage in dialogue with both compiler writers and hardware engineers. The goal is to determine the features required at the ISA level. Features desired by compiler writers but challenging for hardware engineers to implement cost-effectively are excluded. Conversely, if hardware engineers propose innovative features that software developers struggle to utilize, these ideas may not make it into the design. After negotiations and simulations, an ISA optimized for the intended programming languages should emerge and be implemented.

## Challenges and Reality
In practice, when a new machine is introduced, customers typically ask three critical questions: 1) Is it compatible with its predecessor? 2) Can I run my old operating system on it? 3) Will it run all my existing application programs unmodified? The pressure to maintain ISA compatibility or backward compatibility between models is immense. This means that new machines must be capable of running old programs without modification. However, new instructions and features can be introduced for exploitation by new software. The focus is on ensuring that old programs can run on the new machine. This challenge pushes architects to build superior machines within the constraints of backward compatibility.

## The Significance of ISA Design
ISA design remains important despite market forces favoring compatibility. A good ISA provides substantial advantages over a poor one, particularly in terms of computing power versus cost. Different ISAs can result in performance differences of up to 25% for otherwise equivalent designs. While market dynamics make it challenging to introduce entirely new general-purpose ISAs, specialized markets, such as embedded systems or multimedia processors, witness more frequent ISA innovations.

## Characteristics of a Good ISA
Two primary factors define a good ISA. First, it should define instructions that can be efficiently implemented using current and future technologies, resulting in cost-effective designs over multiple generations. A poor ISA design can complicate implementation, requiring more hardware resources and potentially leading to slower execution.

Second, a good ISA should provide a clear target for compiled code. Regularity and completeness in the range of choices are vital attributes that do not always exist in an ISA. These qualities are crucial for compilers, as they need to make optimal choices among available alternatives. An ISA that offers fewer choices or hinders certain operations can pose challenges for compilers. In essence, a good ISA should satisfy both hardware and software designers, making it easy to implement efficiently and generate high-quality code.

Understanding ISA design is essential due to its significant impact on system performance and its role as a bridge between hardware and software.

*Note: This summary provides an overview of the concepts discussed in Chapter 5 of the text.*

Here are the problems formatted in readable Markdown:

## PROBLEMS

1. A word on a little-endian computer has the numerical value of 9. If it is transmitted to a big-endian computer byte by byte and stored there, with byte 0 in byte 0, and so on, what is its numerical value on the big endian machine?

2. Design an expanding opcode to allow all the following to be encoded in a 36-bit instruction:
   - 7 instructions with two 15-bit addresses and one 3-bit register number
   - 500 instructions with one 15-bit address and one 3-bit register number
   - 40 instructions with no addresses or registers

3. A certain machine has 24-bit instructions and 8-bit addresses. Some instructions have one address and others have two. If there are n two-address instructions, what is the maximum number of one-address instructions?

4. Given the memory values below and a one-address machine with an accumulator, what values do the following instructions load into the accumulator?
   - word 20 contains 40
   - word 30 contains 50
   - word 40 contains 60
   - word 50 contains 70
   - LOAD IMMEDIATE 20
   - LOAD DIRECT 20
   - LOAD INDIRECT 20
   - LOAD IMMEDIATE 30
   - LOAD DIRECT 30
   - LOAD INDIRECT 30

5. Given the memory values below and a one-address machine with an accumulator, what values do the following instructions load into the accumulator?
   - word 10 contains 25
   - word 20 contains 35
   - word 25 contains 45
   - word 35 contains 60
   - LOAD IMMEDIATE 10
   - LOAD DIRECT 10
   - LOAD INDIRECT 10
   - LOAD IMMEDIATE 20
   - LOAD DIRECT 20
   - LOAD INDIRECT 20

6. Compare 0-, 1-, 2-, and 3-address machines by writing programs to compute X = (A + B × C) / (D − E × F) for each of the four machines. The instructions available for use are as follows:

   - 0 Address
   - 1 Address
   - 2 Address
   - 3 Address

   How many bits does each machine need to compute X?

7. Devise an addressing mechanism that allows an arbitrary set of 128 addresses, not necessarily contiguous, in a large address space to be specifiable in a 7-bit field.

8. Convert the following formulas from infix to reverse Polish notation:
   - A + B + C − D − E
   - (A − B) × (C + D) + E
   - (A × B) + (C × D) + E
   - (A − B) × (((C − D × E) / F) / G) × H

9. Which of the following pairs of reverse Polish notation formulas are mathematically equivalent?
   - R S + T +
   - R S T + +
   - R S − T −
   - R S T − −
   - R S × T +
   - R S T + ×

10. Convert the following reverse Polish notation formulas to infix:
    - A B − C + D ×
    - A B /C D / +
    - A B C D E + × × /
    - A B C D E × F / + G − H / × +

11. Write three reverse Polish notation formulas that cannot be converted to infix.

12. Convert the following infix Boolean formulas to reverse Polish notation:
    - (A OR B) AND C
    - (A OR B) AND (A OR C)
    - (A AND B) OR (C AND D) OR E

13. Convert the following infix formula to reverse Polish notation and generate IJVM code to evaluate it:
    - (5 × 2 + 7) − (4 / 2 + 1)

14. How many registers does the machine whose instruction formats are given in Fig. 5-24 have?

15. In Fig. 5-24, bit 23 is used to distinguish the use of format 1 from format 2. No bit is provided to distinguish the use of format 3. How does the hardware know to use it?

16. Describe one advantage and one disadvantage of program-counter-relative addressing.

17. The Core i7 has a condition code bit that keeps track of the carry out of bit 3 after an arithmetic operation. What good is it?

18. One of your friends has just come bursting into your room at 3 A.M., out of breath, to tell you about his brilliant new idea: an instruction with two opcodes. Should you send your friend off to the patent office or back to the drawing board?

19. Tests of the form
    - if (k == 0) ...
    - if (a > b) ...
    - if (k < 5) ...
    are common in programming. Devise an instruction to perform these tests efficiently. What fields are present in your instruction?

20. For the 16-bit binary number 1001 0101 1100 0011, show the effect of:
    - A right shift of 4 bits with zero fill.
    - A right shift of 4 bits with sign extension.
    - A left shift of 4 bits.
    - A left rotate of 4 bits.
    - A right rotate of 4 bits.

21. How can you clear a memory word on a machine with no CLR instruction?

22. Compute the Boolean expression (A AND B) OR C for
    - A = 1010 1110 0001 0000
    - B = 1010 1111 1010 1001
    - C = 0000 0000 0010 0000

23. Devise a way to interchange two variables A and B without using a third variable or register. Hint: Think about the EXCLUSIVE OR instruction.

24. On a certain computer it is possible to move a number from one register to another, shift each of them left by different amounts, and add the results in less time than a multiplication takes. Under what condition is this instruction sequence useful for computing ‘‘constant × variable’’?

25. Different machines have different instruction densities (number of bytes required to perform a certain computation). For the following Java code fragments, translate each one into Core i7 assembly language and IJVM. Then compute how many bytes each expression requires for each machine. Assume that i and j are local variables in memory, but otherwise make the most optimistic assumptions in all cases:
    - i = 3;
    - i = j;
    - i = j − 1;

26. The loop instructions discussed in the text were for handling for loops. Design an instruction that might be useful for handling common while loops instead.

27. Assume that the monks in Hanoi can move 1 disk per minute (they are in no hurry to finish the job because employment opportunities for people with this particular skill are limited in Hanoi). How long will it take them to solve the entire 64-disk problem? Express your result in years.

28. Why do I/O devices place the interrupt vector on the bus? Would it be

 possible to store that information in a table in memory instead?

29. A computer uses DMA to read from its disk. The disk has 64 512-byte sectors per track. The disk rotation time is 16 msec. The bus is 16 bits wide, and bus transfers take 500 nsec each. The average CPU instruction requires two bus cycles. How much is the CPU slowed down by DMA?

30. The DMA transfer described in Fig. 5-32 requires 2 bus transfers to move data between an I/O device and memory. Describe how the performance of DMA can be improved by using the bus architecture in Fig. 3-35.

31. Why do interrupt service routines have priorities associated with them whereas normal procedures do not have priorities?

32. The IA-64 architecture contains an unusually large number of registers (64). Was the choice to have so many of them related to the use of predication? If so, in what way? If not, why are there so many?

33. In the text, the concept of speculative LOAD instructions is discussed. However, there is no mention of speculative STORE instructions. Why not? Are they essentially the same as speculative LOAD instructions or is there another reason not to discuss them?

34. When two local area networks are to be connected, a computer called a bridge is inserted between them, connected to both. Each packet transmitted on either network causes an interrupt on the bridge, to let the bridge see if the packet has to be forwarded. Suppose that it takes 250 μsec per packet to handle the interrupt and inspect the packet, but forwarding it, if need be, is done by the DMA hardware without burdening the CPU. If all packets are 1 KB, what is the maximum data rate on each of the networks that can be tolerated without having the bridge lose packets?

35. In Fig. 5-40, the frame pointer points to the first local variable. What information does the program need in order to return from a procedure?

36. Write an assembly language subroutine to convert a signed binary integer to ASCII.

37. Write an assembly language subroutine to convert an infix formula to reverse Polish.

38. The towers of Hanoi is not the only little recursive procedure much loved by computer scientists. Another all-time favorite is n!, where n! = n(n − 1)! subject to the limiting condition that 0! = 1. Write a procedure in your favorite assembly language to compute n!.

39. If you are not convinced that recursion is at times indispensable, try programming the Towers of Hanoi without using recursion and without simulating the recursive solution by maintaining a stack in an array. Be warned, however, that you will probably not be able to find the solution.

Feel free to ask if you need assistance with any of these problems.