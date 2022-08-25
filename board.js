export function loadBoard(dim, type) {
    if (dim == 3) {
        switch (type) {
            // standard
            case 0: {
                return [[['4','0','0','0','0','0','0','4','0','0','0','0','0','0','4'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','2','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['4','0','0','0','2','0','0','4','0','0','2','0','0','0','4'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','2','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['4','0','0','0','0','0','0','4','0','0','0','0','0','0','4']],
                         
                        [['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','3','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','1','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','3','0','0','0','1','0','0','0','1','0','0','0','3','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','1','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','3','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']],
                         
                        [['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','3','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','2','0','0','0','0','0','0','0'],
                         ['0','0','3','0','0','0','2','0','2','0','0','0','3','0','0'],
                         ['0','0','0','0','0','0','0','2','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','3','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']],
                         
                        [['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','3','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','3','0','0','0','1','0','0','0','3','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','3','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']],
                         
                        [['0','0','0','0','0','0','0','2','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','3','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['2','0','0','0','3','0','0','0','0','0','3','0','0','0','2'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','3','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','2','0','0','0','0','0','0','0']],
                         
                        [['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','1','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','2','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','1','0','0','0','2','0','0','0','2','0','0','0','1','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','2','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','1','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']],
                         
                        [['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','2','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','1','0','0','0','0','0','0','0'],
                         ['0','0','2','0','0','0','1','0','1','0','0','0','2','0','0'],
                         ['0','0','0','0','0','0','0','1','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','2','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']],
                         
                        [['4','0','0','0','0','0','0','4','0','0','0','0','0','0','4'],
                         ['0','3','0','0','0','0','0','0','0','0','0','0','0','3','0'],
                         ['0','0','3','0','0','0','0','0','0','0','0','0','3','0','0'],
                         ['0','0','0','3','0','0','0','0','0','0','0','3','0','0','0'],
                         ['0','0','0','0','3','0','0','0','0','0','3','0','0','0','0'],
                         ['0','0','0','0','0','2','0','0','0','2','0','0','0','0','0'],
                         ['0','0','0','0','0','0','1','0','1','0','0','0','0','0','0'],
                         ['4','0','0','0','0','0','0','5','0','0','0','0','0','0','4'],
                         ['0','0','0','0','0','0','1','0','1','0','0','0','0','0','0'],
                         ['0','0','0','0','0','2','0','0','0','2','0','0','0','0','0'],
                         ['0','0','0','0','3','0','0','0','0','0','3','0','0','0','0'],
                         ['0','0','0','3','0','0','0','0','0','0','0','3','0','0','0'],
                         ['0','0','3','0','0','0','0','0','0','0','0','0','3','0','0'],
                         ['0','3','0','0','0','0','0','0','0','0','0','0','0','3','0'],
                         ['4','0','0','0','0','0','0','4','0','0','0','0','0','0','4']],
                         
                        [['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','2','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','1','0','0','0','0','0','0','0'],
                         ['0','0','2','0','0','0','1','0','1','0','0','0','2','0','0'],
                         ['0','0','0','0','0','0','0','1','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','2','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']],
                         
                        [['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','1','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','2','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','1','0','0','0','2','0','0','0','2','0','0','0','1','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','2','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','1','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']],
                         
                        [['0','0','0','0','0','0','0','2','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','3','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['2','0','0','0','3','0','0','0','0','0','3','0','0','0','2'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','3','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','2','0','0','0','0','0','0','0']],
                         
                        [['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','3','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','3','0','0','0','1','0','0','0','3','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','3','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']],
                         
                        [['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','3','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','2','0','0','0','0','0','0','0'],
                         ['0','0','3','0','0','0','2','0','2','0','0','0','3','0','0'],
                         ['0','0','0','0','0','0','0','2','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','3','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']],
                         
                        [['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','3','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','1','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','3','0','0','0','1','0','0','0','1','0','0','0','3','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','1','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','3','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']],
                         
                        [['4','0','0','0','0','0','0','4','0','0','0','0','0','0','4'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','2','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['4','0','0','0','2','0','0','4','0','0','2','0','0','0','4'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','2','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
                         ['4','0','0','0','0','0','0','4','0','0','0','0','0','0','4']]];
            }
            default: {
                break;
            }
        }
    }
}