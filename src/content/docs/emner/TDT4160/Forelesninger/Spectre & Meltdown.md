---
title: Spectre & Meltdown
---

## Kryptografi

Tekst | Encrypt/decrypt | Hemmelig tekst
--- | --- | ---
, | K (key) | ,

## Spectre & Meltdown

Both of these security vulnerabilities abuse speculative execution to read memory that should be protected.

### Spectre

Abuses speculative execution to read memory that should be protected. This is done by reading memory that is not allowed to be read, and then throwing away the result if it is not allowed. This allows access to memory from other processes.

Spectre uses a dedicated machine instruction such as `clflush`  Flush+Reload

### Meltdown

Abuses out-of-order execution to read memory that should be protected. This is done by reading memory that is not allowed to be read, and then throwing away the result if it is not allowed. This allows access to kernel memory from user space.

### Out-of-order execution

### Speculative execution

The CPU tries to guess what the next instruction will be, and executes it before it is needed. If it guessed wrong, it will just throw away the result.

## Resources

- [Flush+Reload vs Evict+Reload](https://blog.f-secure.com/some-notes-on-meltdown-and-spectre/)
- Flush+Reload: <https://academic.oup.com/comjnl/article/65/10/2769/6341631#377226635>
- Spectre: How to <http://csg.csail.mit.edu/6.S983/labs/spectre/>

### Videos

- [Spectre attack explained like you're 5](https://youtu.be/q3-xCvzBjGs?si=jNL7gXQzKGuKTFDV)
- [Meltdown attack explained like you're 5](https://youtu.be/JSqDqNysycQ?si=B40RwYIFDnFGdbnb)

- [Meltdown and Spectre in 3 Minutes](https://youtu.be/syAdX44pokE?si=wZnqxtDOTDQsEqDn)
- [Meltdown & Spectre vulnerabilities - Simply Explained](https://youtu.be/bs0xswK0eZk?si=KVZXAT9XYHAvGpjb)
- [Nearly All CPUs Vulnerable: Explaining Meltdown & Spectre](https://youtu.be/-B1OGoVZcUQ?si=ETtqjsfi4oc2Xho4)
- [Spectre & Meltdown, Computerphile](https://youtu.be/I5mRwzVvFGE?si=KMFVFXeIaHIEyiYh)
- [CPUs Are Out of Order - Computerphile](https://youtu.be/_qvOlL8nhN4?si=hpLWIF73UUFcgu0E)

### Whitepapers

- <https://meltdownattack.com/>
  - <https://meltdownattack.com/meltdown.pdf>
  - <https://spectreattack.com/spectre.pdf>
