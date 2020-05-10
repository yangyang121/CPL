//
// Created by Young on 2020/5/10.
//

#include <stdio.h>

int main() {
    int c, space, table, line;
    space = 0;
    table = 0;
    line = 0;
    c = getchar();
    while (c != EOF) {
        if (c == ' ') {
            space++;
        } else if (c == '\t') {
            table++;
        } else if (c == '\n') {
            line++;
        }
    }
    printf("空格数量%d\n", space);
    printf("制表符数量%d\n", table);
    printf("换行符数量%d\n", line);
    return 0;
}
