#include <stdio.h>

int any(char s1[], char s2[]);

int main() {
    char s1[] = "abcdefg";
    char s2[] = "xyz";

    int index=any(s1, s2);
    printf("%d\n", index);

    return 0;
}

int any(char s1[], char s2[]) {
    for (int i = 0; s2[i] != '\0'; i++) {
        for (int j = 0; s1[j] != '\0'; j++) {
            if (s2[i] == s1[j])
                return j;
        }
    }
    return -1;
}
